import React, { useState, useEffect } from 'react';

function GodPick({ God, Hover, Role }) {
    const [god, setGod] = useState("");
    const [god2, setGod2] = useState("");
    const [hover, setHover] = useState(true);
    const [role, setRole] = useState("");
    let url;
    let varClassName;
    let varContainerClassName;

    useEffect(() => {
        setGod(God.toString().toLowerCase());
        setGod2(God.toString().toLowerCase());
        setHover(Hover);
        setRole(Role);
    }, [God, Hover, Role]);

    console.log("God " + god);
    console.log("God2 " + god2);
    console.log("Hover " + hover);
    console.log("Role " + role);

    if (god !== "") {
        if (god.match(/([A-z]+[ ]{1,})+[A-z]+/g)) {
            if (god == "ah muzen cab") {
                setGod("ah_muzen_cab");
                setGod2("ah-muzen-cab");
            }
            else if (god == "da ji") {
                setGod(god.replace(/[ ]{1,}/g, "_"));
                setGod2("daji");
            }
            else {
                setGod(god.replace(/[ ]{1,}/g, "_"));
                setGod2(god2.replace(/[ ]{1,}/g, "-"));
            }
        }
        url = "https://webcdn.hirezstudios.com/smite/god-skins/" + god + "_standard-" + god2 + ".jpg";
        if (hover) {
            varClassName = god2 + " hover";
        }
        else {
            varClassName = god2;
        }
    }
    else {
        url = "https://i.imgur.com/1ghlJ1q.png";
        varClassName = "bg-contain ml-24 mt-small-logo w-1/3";
    }

    if (role != "") {
        if (role == "adc") {
            varContainerClassName = "h-32 w-80 mx-2 mt-2 bg-black overflow-hidden";
        }
        else if (role == "solo") {
            varContainerClassName = "h-32 w-80 mx-2 mb-2 bg-black overflow-hidden";
        }
        else {
            varContainerClassName = "h-32 w-80 mx-2 my-2 bg-black overflow-hidden"
        }
    }

    return (
        <div className={varContainerClassName}>
            <img src={url} className={varClassName} alt={"pick-" + role} />
        </div>
    );
}

export default GodPick;