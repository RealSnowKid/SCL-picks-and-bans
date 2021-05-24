import React, { useState, useEffect } from 'react';

export default function SmallGodBan({ God, Role }) {
    const [god, setGod] = useState("");
    const [role, setRole] = useState("");
    let url;
    let varClassName;

    useEffect(() => {
        setGod(God.toString().toLowerCase());
        setRole(Role);
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
        url = "https://webcdn.hirezstudios.com/smite/god-icons/" + god + ".jpg";
        varClassName = "filter grayscale";
    }
    else {
        url = "https://i.imgur.com/Bx0iFjJ.png";
        varClassName = "bg-contain mx-auto h-16 filter grayscale";
    }

    return (
        <>
            <img src={url} className={varClassName} alt={"ban-" + role} />
        </>
    );
}