import React, { useState, useEffect } from 'react';

export default function SmallGodPick({ God, Hover, Role }) {
    const [god, setGod] = useState("");
    const [role, setRole] = useState("");
    const [hover, setHover] = useState(true);
    let url;
    let varClassName;

    useEffect(() => {
        setGod(God.toString().toLowerCase());
        setRole(Role);
        setHover(Hover);
    }, [God, Role]);

    if (god !== "") {
        if (god.match(/([A-z]+[ ]{1,})+[A-z]+/g)) {
            if (god === "ah muzen cab") {
                setGod("ah-muzen-cab");
            }
            else {
                setGod(god.replace(/[ ]{1,}/g, "-"));
            }
        }
        else if (god === "chang'e") {
            setGod("change");
        }

        url = "https://webcdn.hirezstudios.com/smite/god-icons/" + god + ".jpg";
        if (hover) {
            varClassName = "filter grayscale";
        }
        else {
            varClassName = "filter-none";
        }
    }
    else {
        url = "https://i.imgur.com/Bx0iFjJ.png";
        varClassName = "bg-contain mx-auto h-16";
    }

    return (
        <>
            <img src={url} className={varClassName} alt={"pick-" + role} />
        </>
    );
}