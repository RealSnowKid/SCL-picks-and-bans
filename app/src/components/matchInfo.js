import React, { useState, useEffect } from 'react'
import Currently from './currently';

export default function MatchInfo({ message }) {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(message);
    }, [message])

    if (data.length > 0) {
        return (
            <div className="h-full w-full flex flex-col">
                <div className="flex mx-10 justify-around text-white text-2xl">
                    <div className="flex">
                        <h1 className="mr-4">Score</h1>
                        <h1>{data[0].matchScoreT1 + " - " + data[0].matchScoreT2}</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="mx-auto">Currently</h1>
                        <Currently data={data[0]} />
                    </div>
                    <div className="flex">
                        <h1 className="mr-4">Patch</h1>
                        <h1>{data[0].patch}</h1>
                    </div>
                </div>
                <hr className="h-1 border-white bg-white" />
                <div className="flex flex-row">
                    <div className="w-1/2">
                        <div className="flex flex-col ml-10">
                            <div className="flex">
                                <h1 className="text-white text-2xl mt-1">{data[1].name}</h1>
                                <img src={data[1].logo} className="h-10 mx-3" alt="team1logo"></img>
                            </div>
                            <h1 className="text-white text-lg">({data[1].leagueScore})</h1>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col items-end mr-10">
                        <div className="flex">
                            <img src={data[2].logo} className="h-10 mx-3" alt="team2logo"></img>
                            <h1 className="text-white text-2xl mt-1">{data[2].name}</h1>
                        </div>
                        <h1 className="text-white text-lg">({data[2].leagueScore})</h1>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <h1 className="text-white text-4xl mx-auto">No Data Yet</h1>
        );
    }
}