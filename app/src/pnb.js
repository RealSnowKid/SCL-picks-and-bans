import React, { useState, useEffect } from 'react';
import './pnb.css';
import GodPick from './components/godPick';
import GodBan from './components/godBan';
import SockJS from 'sockjs-client';
import Timer from './components/timer';

function Pnb() {
    const sock = new SockJS('https://scl-picks-and-bans.herokuapp.com/pnb');
    const [data, setData] = useState([]);

    //#region stepNumber and functions
    const isOrderPaused = (stepNumber) => {
        if (stepNumber == 1 || stepNumber == 3 || stepNumber == 5 || stepNumber == 7 || stepNumber == 9 || stepNumber == 12 || stepNumber == 14 || stepNumber == 16) {
            return false;
        }
        else {
            return true;
        }
    };
    const isChaosPaused = (stepNumber) => {
        if (stepNumber == 2 || stepNumber == 4 || stepNumber == 6 || stepNumber == 8 || stepNumber == 10 || stepNumber == 11 || stepNumber == 13 || stepNumber == 15 || stepNumber == 17) {
            return false;
        }
        else {
            return true;
        }
    };
    //#endregion

    useEffect(() => {
        sock.onopen = () => {
            console.log('open');
        };

        sock.onmessage = (e) => {
            setData(JSON.parse(e.data));
        }

        sock.onclose = () => {
            console.log('close');
        };

        return () => {
            sock.close();
        }
        // eslint-disable-next-line
    }, [])

    console.log(data);

    if (data.length > 0) {
        return (
            <div className="flex flex-col h-screen">
                <div className="flex w-full h-1/6">
                    <div className="flex items-center justify-between bg-gradient-to-r from-snl-dark-lighter to-black w-2/6">
                        <img className="team-logo mx-2 rounded" src={data[1].logo} alt="team1logo" />
                        <div className="flex-col mr-6">
                            <h1 className="text-center text-5xl font-bold text-white">{data[1].name}</h1>
                            <h2 className="text-right text-2xl text-white">({data[1].leagueScore})</h2>
                        </div>
                    </div>
                    <div className="flex content-between bg-black w-2/5">
                        <div className="flex timer-left items-center">
                            <h1 className="text-white mx-auto not-italic text-7xl text-center"><Timer stepNumber={data[0].step} pickSide={0} paused={isOrderPaused(data[0].step)} /></h1>
                        </div>
                        <div className="bg-black w-1/2"></div>
                        <div className="flex-col score-box absolute">
                            <div className="flex-col score-box-inner mx-5">
                                <div className="w-full flex">
                                    <h2 className="text-white text-xl mx-auto">SCORE</h2>
                                </div>
                                <div className="w-full flex my-3">
                                    <div className="flex text-white text-6xl mx-auto">
                                        <h1 className="mx-6">{data[0].matchScoreT1}</h1>
                                        <h1 className="mx-6">-</h1>
                                        <h1 className="mx-6">{data[0].matchScoreT2}</h1>
                                    </div>
                                </div>
                                <div className="w-full flex">
                                    <h2 className="text-white text-2xl mx-auto">PATCH {data[0].patch}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex timer-right items-center">
                            <h1 className="text-white mx-auto not-italic text-7xl text-center"><Timer stepNumber={data[0].step} pickSide={1} paused={isChaosPaused(data[0].step)} /></h1>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse items-center justify-between bg-gradient-to-l from-snl-yellow to-black w-2/6">
                        <img className="team-logo mx-2" src={data[2].logo} alt="team2logo" />
                        <div className="flex-col ml-6">
                            <h1 className="text-center text-5xl font-bold text-white">{data[2].name}</h1>
                            <h2 className="text-left text-2xl text-white">({data[2].leagueScore})</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-4/6">
                    <div className="flex flex-col bg-gradient-to-r from-snl-dark-lighter to-black w-2/6 py-3">
                        <GodPick God={data[1].pick1} Hover={data[1].pick1Hover} Role="solo" Active={data[0].op1} />
                        <GodPick God={data[1].pick2} Hover={data[1].pick2Hover} Role="jung" Active={data[0].op2} />
                        <GodPick God={data[1].pick3} Hover={data[1].pick3Hover} Role="mid" Active={data[0].op3} />
                        <GodPick God={data[1].pick4} Hover={data[1].pick4Hover} Role="supp" Active={data[0].op4} />
                        <GodPick God={data[1].pick5} Hover={data[1].pick5Hover} Role="adc" Active={data[0].op5} />
                    </div>
                    <div className="absolute inset-y-1/6 inset-x-1/6+ my-3 h-auto w-auto bg-white"></div>
                    <div className="items-center bg-black w-2/5">

                    </div>
                    <div className="flex flex-col items-end bg-gradient-to-l from-snl-yellow to-black w-2/6 py-3">
                        <GodPick God={data[2].pick1} Hover={data[2].pick1Hover} Role="solo-2" Active={data[0].cp1} />
                        <GodPick God={data[2].pick2} Hover={data[2].pick2Hover} Role="jung-2" Active={data[0].cp2} />
                        <GodPick God={data[2].pick3} Hover={data[2].pick3Hover} Role="mid-2" Active={data[0].cp3} />
                        <GodPick God={data[2].pick4} Hover={data[2].pick4Hover} Role="supp-2" Active={data[0].cp4} />
                        <GodPick God={data[2].pick5} Hover={data[2].pick5Hover} Role="adc-2" Active={data[0].cp5} />
                    </div>
                </div >
                <div className="flex w-full h-1/6">
                    <div className="bg-gradient-to-r from-snl-dark-lighter to-black w-2/6">
                        <div className="flex ml-5 ban-box">
                            <GodBan God={data[1].ban1} Number={1} Position="left" Active={data[0].ob1} />
                            <GodBan God={data[1].ban2} Number={2} Position="left" Active={data[0].ob2} />
                            <GodBan God={data[1].ban3} Number={3} Position="left" Active={data[0].ob3} />
                            <GodBan God={data[1].ban4} Number={4} Position="left" Active={data[0].ob4} />
                            <GodBan God={data[1].ban5} Number={5} Position="left" Active={data[0].ob5} />
                        </div>
                    </div>
                    <div className="bg-black w-2/5">
                        <img className="snl-logo-bot mx-auto" src="https://i.imgur.com/Bx0iFjJ.png" alt="SNL Logo"></img>
                    </div>
                    <div className="bg-gradient-to-l from-snl-yellow to-black w-2/6">
                        <div className="flex flex-row-reverse mr-5 ban-box">
                            <GodBan God={data[2].ban1} Number={1} Position="right" Active={data[0].cb1} />
                            <GodBan God={data[2].ban2} Number={2} Position="right" Active={data[0].cb2} />
                            <GodBan God={data[2].ban3} Number={3} Position="right" Active={data[0].cb3} />
                            <GodBan God={data[2].ban4} Number={4} Position="right" Active={data[0].cb4} />
                            <GodBan God={data[2].ban5} Number={5} Position="right" Active={data[0].cb5} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
    else {
        return (
            <div className="flex flex-col h-screen">
                <div className="flex w-full h-1/6">
                    <div className="flex items-center justify-between bg-gradient-to-r from-snl-dark-lighter to-black w-2/6">
                        <img className="team-logo mx-2 rounded" src="https://smitenoobleague.com/images/teamBadge.png" alt="team1logo" />
                        <div className="flex-col mr-6">
                            <h1 className="text-center text-5xl font-bold text-white">Team 1</h1>
                            <h2 className="text-right text-2xl text-white">(0-0)</h2>
                        </div>
                    </div>
                    <div className="flex content-between bg-black w-2/5">
                        <div className="flex timer-left items-center">
                            <h1 className="text-white ml-12 not-italic text-7xl">28</h1>
                        </div>
                        <div className="bg-black w-1/2"></div>
                        <div className="flex-col score-box absolute">
                            <div className="flex-col score-box-inner mx-5">
                                <div className="w-full flex">
                                    <h2 className="text-white text-xl mx-auto">SCORE</h2>
                                </div>
                                <div className="w-full flex my-3">
                                    <div className="flex text-white text-6xl mx-auto">
                                        <h1 className="mx-6">0</h1>
                                        <h1 className="mx-6">-</h1>
                                        <h1 className="mx-6">0</h1>
                                    </div>
                                </div>
                                <div className="w-full flex">
                                    <h2 className="text-white text-2xl mx-auto">PATCH 8.5</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex timer-right items-center">
                            <h1 className="text-white ml-12 not-italic text-7xl">28</h1>
                        </div>

                    </div>
                    <div className="flex flex-row-reverse items-center justify-between bg-gradient-to-l from-snl-yellow to-black w-2/6">
                        <img className="team-logo mx-2" src="https://smitenoobleague.com/images/teamBadge.png" alt="team2logo" />
                        <div className="flex-col ml-6">
                            <h1 className="text-center text-5xl font-bold text-white">Team 2</h1>
                            <h2 className="text-left text-2xl text-white">(0-0)</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-4/6">
                    <div className="flex flex-col bg-gradient-to-r from-snl-dark-lighter to-black w-2/6 py-3">
                        <GodPick God="" Hover={true} Role="solo" Active={false} />
                        <GodPick God="" Hover={true} Role="jung" Active={false} />
                        <GodPick God="" Hover={true} Role="mid" Active={false} />
                        <GodPick God="" Hover={true} Role="supp" Active={false} />
                        <GodPick God="" Hover={true} Role="adc" Active={false} />
                    </div>
                    <div className="absolute inset-y-1/6 inset-x-1/6+ my-3 h-auto w-auto bg-white"></div>
                    <div className="items-center bg-black w-2/5">

                    </div>
                    <div className="flex flex-col items-end bg-gradient-to-l from-snl-yellow to-black w-2/6 py-3">
                        <GodPick God="" Hover={true} Role="solo-2" Active={false} />
                        <GodPick God="" Hover={true} Role="jung-2" Active={false} />
                        <GodPick God="" Hover={true} Role="mid-2" Active={false} />
                        <GodPick God="" Hover={true} Role="supp-2" Active={false} />
                        <GodPick God="" Hover={true} Role="adc-2" Active={false} />
                    </div>
                </div >
                <div className="flex w-full h-1/6">
                    <div className="bg-gradient-to-r from-snl-dark-lighter to-black w-2/6">
                        <div className="flex ml-5 ban-box">
                            <GodBan God="" Number={1} Position="left" Active={false} />
                            <GodBan God="" Number={2} Position="left" Active={false} />
                            <GodBan God="" Number={3} Position="left" Active={false} />
                            <GodBan God="" Number={4} Position="left" Active={false} />
                            <GodBan God="" Number={5} Position="left" Active={false} />
                        </div>
                    </div>
                    <div className="bg-black w-2/5">
                        <img className="snl-logo-bot mx-auto" src="https://i.imgur.com/Bx0iFjJ.png" alt="SNL Logo"></img>
                    </div>
                    <div className="bg-gradient-to-l from-snl-yellow to-black w-2/6">
                        <div className="flex flex-row-reverse mr-5 ban-box">
                            <GodBan God="" Number={1} Position="right" Active={false} />
                            <GodBan God="" Number={2} Position="right" Active={false} />
                            <GodBan God="" Number={3} Position="right" Active={false} />
                            <GodBan God="" Number={4} Position="right" Active={false} />
                            <GodBan God="" Number={5} Position="right" Active={false} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Pnb;