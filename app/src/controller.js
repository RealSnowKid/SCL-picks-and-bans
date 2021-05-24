import React, { useState, useEffect } from 'react'
import SockJS from 'sockjs-client';
import MatchInfo from './components/matchInfo';

export default function Controller() {
    const sock = new SockJS('http://localhost:9999/pnb');
    const [things, setData] = useState([]);
    // eslint-disable-next-line
    const [step, setStep] = useState(0);

    let json = [
        {
            matchScoreT1: 0,
            matchScoreT2: 0,
            patch: "",
            ob1: false,
            cb1: false,
            ob2: false,
            cb2: false,
            ob3: false,
            cb3: false,
            op1: false,
            cp1: false,
            cp2: false,
            op2: false,
            op3: false,
            cp3: false,
            cb4: false,
            ob4: false,
            cb5: false,
            ob5: false,
            cp4: false,
            op4: false,
            op5: false,
            cp5: false
        },
        {
            name: "Team 1",
            logo: "https://i.imgur.com/thNPVvc.png",
            leagueScore: "0-0",
            ban1: "",
            ban2: "",
            ban3: "",
            pick1: "",
            pick1Hover: true,
            pick2: "",
            pick2Hover: true,
            pick3: "",
            pick3Hover: true,
            ban4: "",
            ban5: "",
            pick4: "",
            pick4Hover: true,
            pick5: "",
            pick5Hover: true,
        },
        {
            name: "Team 2",
            logo: "https://i.imgur.com/thNPVvc.png",
            leagueScore: "0-0",
            ban1: "",
            ban2: "",
            ban3: "",
            pick1: "",
            pick1Hover: true,
            pick2: "",
            pick2Hover: true,
            pick3: "",
            pick3Hover: true,
            ban4: "",
            ban5: "",
            pick4: "",
            pick4Hover: true,
            pick5: "",
            pick5Hover: true,
        }
    ]

    useEffect(() => {
        sock.onopen = () => {
            console.log('open');
        };

        sock.onclose = () => {
            console.log('close');
        };

        return () => {
            sock.close();
        }
        // eslint-disable-next-line
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let newJson1 =
        {
            matchScoreT1: e.target[0].value.split('-')[0],
            matchScoreT2: e.target[0].value.split('-')[1],
            patch: e.target[1].value,
            ob1: true,
        };
        let newJson2 =
        {
            name: e.target[2].value,
            logo: e.target[3].value,
            leagueScore: e.target[4].value,
        };
        let newJson3 =
        {
            name: e.target[5].value,
            logo: e.target[6].value,
            leagueScore: e.target[7].value,
        };
        json[0].push(newJson1);
        json[1].push(newJson2);
        json[2].push(newJson3);
        console.log(json);
        sock.send(JSON.stringify(json));
    }

    useEffect(() => {
        sock.onmessage = (e) => {
            setData(JSON.parse(e.data));
        };
        // eslint-disable-next-line
    }, [handleFormSubmit])

    return (
        <div className="flex flex-col h-screen">
            <div className="w-full bg-yellow-600 h-20 text-center">
                <h1 className="text-7xl text-white mt-1">SCL PICKS & BANS CONTROLLER PAGE</h1>
            </div>
            <hr className="h-2 border-black bg-black" />
            <div className="flex flex-row w-full h-full">
                <div className="w-1/2 h-full bg-snl-yellow">
                    <form className="flex flex-col h-20" onSubmit={handleFormSubmit}>
                        <h1 className="text-2xl mx-auto">General Information</h1>
                        <input className="w-3/4 mx-auto my-1" type="text" placeholder="Score (Fromat: 0-0)" />
                        <input className="w-3/4 mx-auto my-1" type="text" placeholder="Patch (Format: 8.5)" />
                        <div className="w-full flex mt-2">
                            <div className="w-1/2 flex flex-col mx-1">
                                <h1 className="text-2xl mx-auto">Team 1</h1>
                                <input className="w-full mx-auto my-1" type="text" placeholder="Team 1 Name" />
                                <input className="w-full mx-auto my-1" type="text" placeholder="Team 1 Logo URL" />
                                <input className="w-full mx-auto my-1" type="text" placeholder="Team 1 League Score (Fromat: 0-0)" />
                            </div>
                            <div className="w-1/2 flex flex-col mx-1">
                                <h1 className="text-2xl mx-auto">Team 2</h1>
                                <input className="w-full mx-auto my-1" type="text" placeholder="Team 2 Name" />
                                <input className="w-full mx-auto my-1" type="text" placeholder="Team 2 Logo URL" />
                                <input className="w-full mx-auto my-1" type="text" placeholder="Team 2 League Score (Fromat: 0-0)" />
                            </div>
                        </div>
                        <button className="w-1/2 mx-auto bg-white rounded border border-black hover:bg-gray-300" type="submit">Send</button>
                    </form>
                </div>
                <div className="w-1/2 h-full bg-snl-dark">
                    <div className="w-full flex">
                        <MatchInfo message={things} />
                    </div>
                </div>
            </div>
        </div>
    )
}