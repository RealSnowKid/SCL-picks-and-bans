import React, { useState, useEffect } from 'react';
import './pnb.css';
import GodPick from './components/godPick';
import GodBan from './components/godBan';
import { FaBan } from "react-icons/fa";

function Pnb() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex w-full h-1/6">
                <div className="flex items-center justify-between bg-gradient-to-r from-snl-dark-lighter to-black w-2/6">
                    <img className="team-logo mx-2 rounded" src="https://smitenoobleague.com/images/teamBadge.png" alt="team1logo" />
                    <div className="flex-col mr-6">
                        <h1 className="text-center text-5xl font-bold text-white">Afoolsgamers</h1>
                        <h2 className="text-right text-2xl text-white">(4-2)</h2>
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
                                <h2 className="text-white text-2xl mx-auto">PATCH 8.4</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex timer-right items-center">
                        <h1 className="text-white ml-12 not-italic text-7xl">28</h1>
                    </div>

                </div>
                <div className="flex flex-row-reverse items-center justify-between bg-gradient-to-l from-snl-yellow to-black w-2/6">
                    <img className="team-logo mx-2" src="https://i.imgur.com/0XldNwG.png" alt="team2logo" />
                    <div className="flex-col ml-6">
                        <h1 className="text-center text-5xl font-bold text-white">The Salty Boys</h1>
                        <h2 className="text-left text-2xl text-white">(6-0)</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-row h-4/6">
                <div className="flex flex-col bg-gradient-to-r from-snl-dark-lighter to-black w-2/6 py-3">
                    <GodPick God="Anhur" Hover={false} Role="solo" Active={false} />
                    <GodPick God="" Hover={true} Role="jung" Active={false} />
                    <GodPick God="" Hover={true} Role="mid" Active={false} />
                    <GodPick God="" Hover={true} Role="supp" Active={false} />
                    <GodPick God="" Hover={true} Role="adc" Active={false} />
                </div>
                <div className="absolute inset-y-1/6 inset-x-1/6+ my-3 h-auto w-auto bg-white"></div>
                <div className="items-center bg-black w-2/5">

                </div>
                <div className="flex flex-col items-end bg-gradient-to-l from-snl-yellow to-black w-2/6 py-3">
                    <GodPick God="Geb" Hover={true} Role="solo-2" Active={true} />
                    <GodPick God="" Hover={true} Role="jung-2" Active={true} />
                    <GodPick God="" Hover={true} Role="mid-2" Active={false} />
                    <GodPick God="" Hover={true} Role="supp-2" Active={false} />
                    <GodPick God="" Hover={true} Role="adc-2" Active={false} />
                </div>
            </div >
            <div className="flex w-full h-1/6">
                <div className="bg-gradient-to-r from-snl-dark-lighter to-black w-2/6">
                    <div className="flex ml-5 ban-box">
                        <GodBan God="Anhur" Number={1} Position="left" Active={false} />
                        <GodBan God="" Number={2} Position="left" Active={true} />
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
                        <GodBan God="Geb" Number={1} Position="right" Active={false} />
                        <GodBan God="" Number={2} Position="right" Active={true} />
                        <GodBan God="" Number={3} Position="right" Active={false} />
                        <GodBan God="" Number={4} Position="right" Active={false} />
                        <GodBan God="" Number={5} Position="right" Active={false} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Pnb;