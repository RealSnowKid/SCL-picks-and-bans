import React, { useState, useEffect } from 'react';
import { FaBan } from "react-icons/fa";

function GodBan({ God, Number, Position, Active }) {
    const [god, setGod] = useState("");
    const [number, setNumber] = useState("");
    const [position, setPosition] = useState("");
    const [active, setActive] = useState("");
    let divClassName;
    let imgUrl;
    let imgClassName;
    let blinkerClassName;

    useEffect(() => {
        setGod(God.toString().toLowerCase());
        setNumber(Number);
        setPosition(Position);
        setActive(Active);
    }, [God, Number, Position, Active])

    if (number === 3) {
        if (position === "left") {
            divClassName = "bans-left ml-2 mr-12 overflow-hidden border-2 border-white";
        }
        else {
            divClassName = "bans-right ml-12 mx-2 overflow-hidden border-2 border-white";
        }
    }
    else {
        divClassName = "mx-2 overflow-hidden border-2 border-white bans-" + position;
    }

    if (god !== "") {
        if (god.match(/([A-z]+[ ]{1,})+[A-z]+/g)) {
            setGod(god.replace(/[ ]{1,}/g, "-"));
        }
        else if (god === "chang'e") {
            setGod("change");
        }
        imgUrl = "https://webcdn.hirezstudios.com/smite/god-icons/" + god + ".jpg";
        imgClassName = "";
    }
    else {
        if (position === "left") {
            imgUrl = "https://i.imgur.com/Bx0iFjJ.png";
            imgClassName = "w-1/3 mx-3 p-1";
            blinkerClassName = "blinker-ban-left";
        }
        else {
            imgUrl = "https://i.imgur.com/PQ8koMG.png";
            imgClassName = "w-2/3 mx-3 p-1";
            blinkerClassName = "blinker-ban-right";
        }
        divClassName += " bg-black border-2 border-white";
    }

    return (
        <>
            <div className={divClassName}>
                <div className={"ban-god-icon-" + position}><img className={imgClassName} src={imgUrl} alt={"ban" + number} /></div>
                {active ? <div className={blinkerClassName}></div> : <></>}
            </div>
            <FaBan className={"text-red-600 " + position + "-ban-" + number} />
        </>
    );
}

export default GodBan;