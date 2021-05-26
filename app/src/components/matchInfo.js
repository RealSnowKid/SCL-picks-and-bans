import React, { useState, useEffect } from 'react';
import useCountDown from 'react-countdown-hook';
import Currently from './currently';
import SmallGodPick from './smallGodPick';
import SmallGodBan from './smallGodBan';
import Timer from './timer';


export default function MatchInfo({ message, stepNumber }) {
    const [data, setData] = useState([]);

    //#region stepNumber and functions
    const isOrderPaused = () => {
        if (stepNumber == 1 || stepNumber == 3 || stepNumber == 5 || stepNumber == 7 || stepNumber == 9 || stepNumber == 12 || stepNumber == 14 || stepNumber == 16) {
            return false;
        }
        else {
            return true;
        }
    };
    const isChaosPaused = () => {
        if (stepNumber == 2 || stepNumber == 4 || stepNumber == 6 || stepNumber == 8 || stepNumber == 10 || stepNumber == 11 || stepNumber == 13 || stepNumber == 15 || stepNumber == 17) {
            return false;
        }
        else {
            return true;
        }
    };
    //#endregion

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
                        {/* fancy timers order and chaos */}
                        <h3 className={`mx-auto text-blue-400`}><Timer stepNumber={stepNumber} pickSide={0} paused={isOrderPaused()} /></h3>
                        <h3 className={`mx-auto text-red-400`}><Timer stepNumber={stepNumber} pickSide={1} paused={isChaosPaused()} /></h3>
                        <Currently data={data[0]} />
                    </div>
                    <div className="flex">
                        <h1 className="mr-4">Patch</h1>
                        <h1>{data[0].patch}</h1>
                    </div>
                </div>
                <hr className="h-1 border-white bg-white" />
                <div className="flex flex-row text-white ">
                    <div className="w-1/2">
                        <div className="flex flex-col ml-10">
                            <div className="flex">
                                <h1 className="text-2xl mt-1">{data[1].name}</h1>
                                <img src={data[1].logo} className="h-10 mx-3" alt="team1logo"></img>
                            </div>
                            <h1 className="text-lg">({data[1].leagueScore})</h1>
                            <h1 className="text-2xl">BANS:</h1>
                            <div className="flex border-b-4">
                                <div>
                                    <div className="w-16 h-16 bg-black mr-2">
                                        <SmallGodBan God={data[1].ban1} Role="solo-1" />
                                    </div>
                                    <h1 className="text-xl text-center">Ban 1</h1>
                                </div>
                                <div>
                                    <div className="w-16 h-16 bg-black mx-2">
                                        <SmallGodBan God={data[1].ban2} Role="jung-1" />
                                    </div>
                                    <h1 className="text-xl text-center">Ban 2</h1>
                                </div>
                                <div>
                                    <div className="w-16 h-16 bg-black mx-2">
                                        <SmallGodBan God={data[1].ban3} Role="mid-1" />
                                    </div>
                                    <h1 className="text-xl text-center">Ban 3</h1>
                                </div>
                                <div>
                                    <div className="w-16 h-16 bg-black mx-2">
                                        <SmallGodBan God={data[1].ban4} Role="supp-1" />
                                    </div>
                                    <h1 className="text-xl text-center">Ban 4</h1>
                                </div>
                                <div>
                                    <div className="w-16 h-16 bg-black mx-2">
                                        <SmallGodBan God={data[1].ban5} Role="adc-1" />
                                    </div>
                                    <h1 className="text-xl text-center">Ban 5</h1>
                                </div>
                            </div>
                            <h1 className="text-2xl">Picks:</h1>
                            <div className="flex-column">
                                <div>
                                    <div className="w-16 h-16 bg-black my-2">
                                        <SmallGodPick God={data[1].pick1} Hover={data[1].pick1Hover} Role="solo-1" />
                                    </div>
                                    <h1 className="text-xl mx-2">Pick 1</h1>
                                </div>
                                <div>
                                    <div className="w-16 h-16 bg-black my-2">
                                        <SmallGodPick God={data[1].pick2} Hover={data[1].pick2Hover} Role="jung-1" />
                                    </div>
                                    <h1 className="text-xl mx-2">Pick 2</h1>
                                </div>
                                <div>
                                    <div className="w-16 h-16 bg-black my-2">
                                        <SmallGodPick God={data[1].pick3} Hover={data[1].pick3Hover} Role="mid-1" />
                                    </div>
                                    <h1 className="text-xl mx-2">Pick 3</h1>
                                </div>
                                <div>
                                    <div className="w-16 h-16 bg-black my-2">
                                        <SmallGodPick God={data[1].pick4} Hover={data[1].pick4Hover} Role="supp-1" />
                                    </div>
                                    <h1 className="text-xl mx-2">Pick 4</h1>
                                </div>
                                <div>
                                    <div className="w-16 h-16 bg-black my-2">
                                        <SmallGodPick God={data[1].pick5} Hover={data[1].pick5Hover} Role="adc-1" />
                                    </div>
                                    <h1 className="text-xl mx-2">Pick 5</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col items-end mr-10">
                        <div className="flex">
                            <img src={data[2].logo} className="h-10 mx-3" alt="team2logo"></img>
                            <h1 className="text-white text-2xl mt-1">{data[2].name}</h1>
                        </div>
                        <h1 className="text-white text-lg">({data[2].leagueScore})</h1>
                        <h1 className="text-2xl">BANS:</h1>
                        <div className="flex border-b-4">
                            <div>
                                <div className="w-16 h-16 bg-black mx-2">
                                    <SmallGodBan God={data[2].ban1} Role="solo-1" />
                                </div>
                                <h1 className="text-xl text-center">Ban 1</h1>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-black mx-2">
                                    <SmallGodBan God={data[2].ban2} Role="jung-1" />
                                </div>
                                <h1 className="text-xl text-center">Ban 2</h1>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-black mx-2">
                                    <SmallGodBan God={data[2].ban3} Role="mid-1" />
                                </div>
                                <h1 className="text-xl text-center">Ban 3</h1>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-black mx-2">
                                    <SmallGodBan God={data[2].ban4} Role="supp-1" />
                                </div>
                                <h1 className="text-xl text-center">Ban 4</h1>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-black ml-2">
                                    <SmallGodBan God={data[2].ban5} Role="adc-1" />
                                </div>
                                <h1 className="text-xl text-center">Ban 5</h1>
                            </div>
                        </div>
                        <h1 className="text-2xl">Picks:</h1>
                        <div className="flex-column">
                            <div>
                                <div className="w-16 h-16 bg-black my-2">
                                    <SmallGodPick God={data[2].pick1} Hover={data[2].pick1Hover} Role="solo-2" />
                                </div>
                                <h1 className="text-xl mx-2">Pick 1</h1>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-black my-2">
                                    <SmallGodPick God={data[2].pick2} Hover={data[2].pick2Hover} Role="jung-2" />
                                </div>
                                <h1 className="text-xl mx-2">Pick 2</h1>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-black my-2">
                                    <SmallGodPick God={data[2].pick3} Hover={data[2].pick3Hover} Role="mid-2" />
                                </div>
                                <h1 className="text-xl mx-2">Pick 3</h1>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-black my-2">
                                    <SmallGodPick God={data[2].pick4} Hover={data[2].pick4Hover} Role="supp-2" />
                                </div>
                                <h1 className="text-xl mx-2">Pick 4</h1>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-black my-2">
                                    <SmallGodPick God={data[2].pick5} Hover={data[2].pick5Hover} Role="adc-2" />
                                </div>
                                <h1 className="text-xl mx-2">Pick 5</h1>
                            </div>
                        </div>
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