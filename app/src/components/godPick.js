import React, { useState, useEffect } from 'react';

function GodPick({ God, Hover, Role, Active }) {
    // const [god, setGod] = useState("");
    // const [god2, setGod2] = useState("");
    // const [hover, setHover] = useState(true);
    // const [role, setRole] = useState("");
    // const [active, setActive] = useState("");
    const [url, setUrl] = useState("");
    const [godClass, setGodClass] = useState("");
    const [hoverClass, setHoverClass] = useState("");
    const [containerClass, setContainerClass] = useState("");
    const [blinkerClass, setBlinkerClass] = useState("");
    //let url;
    // let varClassName;
    // let varClassNameHover;
    // let varContainerClassName;
    // let varBlinkerClassName;
    const [transition, setTransition] = useState(true);

    const imageLoading = () => {
        setTransition(true);
            setTimeout(() => {
                setTransition(false);
            console.log(`image done ${God}`);
            }, 600);
    };

    useEffect(() => {
        imageLoading();
        console.log(`image loading ${God}`);
    }, [url]);

    useEffect(() => {
        let god = "";
        let god2 = "";

        if (God.toString().toLowerCase() !== "") {
            if (God.toString().toLowerCase().match(/([A-z]+[ ]{1,})+[A-z]+/g)) {
                if (God.toString().toLowerCase() === "ah muzen cab") {
                    god = "ah_muzen_cab";
                    god2 = "ah-muzen-cab";
                }
                else if (God.toString().toLowerCase() === "da ji") {
                    god = God.toString().toLowerCase().replace(/[ ]{1,}/g, "_");
                    god2 = "daji";
                }
                else {
                    god = God.toString().toLowerCase().replace(/[ ]{1,}/g, "_");
                    god2 = God.toString().toLowerCase().replace(/[ ]{1,}/g, "-");
                }
            }
            else if (god === "chang'e") {
                god = "change";
                god2 = "change";
            }
            
            setUrl("https://webcdn.hirezstudios.com/smite/god-skins/" + god + "_standard-" + god2 + ".jpg");
            setGodClass(god2);
            console.log("god as background image set");

            if (Hover === true) {
                setHoverClass("hover-" + Role.toString() + " opacity-70");
                setContainerClass("h-32 w-80 mx-2 mt-2 overflow-hidden border-2 border-white");
            }
            else {
                setHoverClass("hover-" + Role.toString() + " opacity-70 locked");
                setContainerClass("h-32 w-80 mx-2 mt-2 overflow-hidden border-2 border-white");
            }
    
        }
        else {
            setUrl("https://i.imgur.com/Bx0iFjJ.png");
            setGodClass("bg-contain m-small-logo");
            console.log("default background image set");
        }
    }, [God, Hover]);

    useEffect(() => {
        if (Role.toString() !== "") {
            if (Role.toString() === "adc" || Role.toString() === "adc-2") {
                setContainerClass("h-32 w-80 mx-2 mt-2 bg-black overflow-hidden border-2 border-white");
            }
            else if (Role.toString() === "solo" || Role.toString() === "solo-2") {
                setContainerClass("h-32 w-80 mx-2 mb-2 bg-black overflow-hidden border-2 border-white");
            }
            else {
                setContainerClass("h-32 w-80 mx-2 my-2 bg-black overflow-hidden border-2 border-white");
            }
            setBlinkerClass("blinker-" + Role.toString());
        }
    }, [Role]);

    return (
        <div className={containerClass}>
            <img src={url} className={`${godClass} ${transition ? "transitioning-src" : "easin-src"}`} alt={"pick-" + Role.toString()}/>
            {/* <h2 className="text-white relative top-7">Nike</h2> */}
            <div className={hoverClass}></div>
            { Active ? <div className={blinkerClass}></div> : <> </>}
        </div>
    );
}

export default GodPick;