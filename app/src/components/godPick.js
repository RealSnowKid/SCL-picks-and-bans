import React, { useState, useEffect } from 'react';

function GodPick({ God, Hover, Role, Active }) {
    const [god, setGod] = useState("");
    const [god2, setGod2] = useState("");
    const [hover, setHover] = useState(true);
    const [role, setRole] = useState("");
    const [active, setActive] = useState("");
    let url;
    let varClassName;
    let varClassNameHover;
    let varContainerClassName;
    let varBlinkerClassName;

    useEffect(() => {
        setGod(God.toString().toLowerCase());
        setGod2(God.toString().toLowerCase());
        setHover(Hover);
        setRole(Role);
        setActive(Active);
    }, [God, Hover, Role, Active]);

    console.log("God " + god);
    console.log("God2 " + god2);
    console.log("Hover " + hover);
    console.log("Role " + role);

    if (god !== "") {
        if (god.match(/([A-z]+[ ]{1,})+[A-z]+/g)) {
            if (god === "ah muzen cab") {
                setGod("ah_muzen_cab");
                setGod2("ah-muzen-cab");
            }
            else if (god === "da ji") {
                setGod(god.replace(/[ ]{1,}/g, "_"));
                setGod2("daji");
            }
            else {
                setGod(god.replace(/[ ]{1,}/g, "_"));
                setGod2(god2.replace(/[ ]{1,}/g, "-"));
            }
        }
        url = "https://webcdn.hirezstudios.com/smite/god-skins/" + god + "_standard-" + god2 + ".jpg";
        varClassName = god2;
        if (hover) {
            varClassNameHover = "hover-" + role;
        }
        else {
            varClassNameHover = "hover-" + role + " locked";
        }

    }
    else {
        url = "https://i.imgur.com/Bx0iFjJ.png";
        varClassName = "bg-contain m-small-logo";
    }

    if (role !== "") {
        if (role === "adc" || role === "adc-2") {
            varContainerClassName = "h-32 w-80 mx-2 mt-2 bg-black overflow-hidden border-2 border-white";
        }
        else if (role === "solo" || role === "solo-2") {
            varContainerClassName = "h-32 w-80 mx-2 mb-2 bg-black overflow-hidden border-2 border-white";
        }
        else {
            varContainerClassName = "h-32 w-80 mx-2 my-2 bg-black overflow-hidden border-2 border-white"
        }
        varBlinkerClassName = "blinker-" + role;
    }

    return (
        <div className={varContainerClassName}>
            <img src={url} className={varClassName} alt={"pick-" + role} />
            {/* <h2 className="text-white relative top-7">Nike</h2> */}
            <div className={varClassNameHover}><img alt="hover"></img></div>
            { active ? <div className={varBlinkerClassName}></div> : <> </>}
        </div>
    );
}

export default GodPick;