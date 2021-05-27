import React, { useState, useEffect } from 'react';

function GodPick({ God, Hover, Role, Active }) {
    const [url, setUrl] = useState("");
    const [godClass, setGodClass] = useState("");
    const [hoverClass, setHoverClass] = useState("");
    const [containerClass, setContainerClass] = useState("");
    const [blinkerClass, setBlinkerClass] = useState("");
    const [transition, setTransition] = useState(false);

    const imageLoading = () => {
        setTransition(true);
    };

    const imageLoaded = () => {
         setTimeout(() => {
                setTransition(false);
            console.log(`image done ${God}`);
            }, 400);
    };

    useEffect(() => {
        imageLoading();
        console.log(`image loading ${God}`);
    }, [url]);

    useEffect(() => {
        console.log("selected god: " + God);
        if (God?.length > 0) {
            if (God === "ah muzen cab") {
                setUrl("https://webcdn.hirezstudios.com/smite/god-skins/" + "ah_muzen_cab" + "_standard-" + "ah-muzen-cab" + ".jpg");
                setGodClass("ah-muzen-cab");
            }
            else if (God === "da ji") {
                const url = "https://webcdn.hirezstudios.com/smite/god-skins/" + "da_ji" + "_standard-" + "daji" + ".jpg";
                setUrl(url);
                setGodClass("daji");
            }
            else if (God === "chang'e") {
                const url = "https://webcdn.hirezstudios.com/smite/god-skins/" + "change" + "_standard-" + "change" + ".jpg";
                setUrl(url);
                setGodClass("change");
            }
            else {
                const god1 = God;
                const god2 = God;
                const url = "https://webcdn.hirezstudios.com/smite/god-skins/" + god1.replace(" ", "_") + "_standard-" + god2.replace(" ", "-") + ".jpg";
                setUrl(url);
                setGodClass(god2.replace(/[ ]{1,}/g, "-"));
            }

            console.log("Url: " + url);

            if (Hover === true) {
                setHoverClass("hover-" + Role.toString() + " opacity-70");
                setContainerClass("h-32 w-80 mx-2 mt-2 bg-black overflow-hidden border-2 border-white");
            }
            else {
                setHoverClass("hover-" + Role.toString() + " opacity-70 locked");
                setContainerClass("h-32 w-80 mx-2 mt-2 bg-black overflow-hidden border-2 border-white");
            }
        }
        else {
            setUrl("https://i.imgur.com/Bx0iFjJ.png");
            setGodClass("bg-contain m-small-logo");
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
            <img src={url} onLoad={imageLoaded} className={`${godClass} ${transition ? "transitioning-src" : "easin-src"}`} alt={"pick-" + Role.toString()}/>
            {/* <h2 className="text-white relative top-7">Nike</h2> */}
            <div className={transition ? "" : hoverClass}></div>
            { Active ? <div className={blinkerClass}></div> : <> </>}
        </div>
    );
}

export default GodPick;