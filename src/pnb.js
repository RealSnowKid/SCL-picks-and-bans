import React, { useState, useEffect } from 'react';
import './pnb.css';
import GodPick from './components/godPick';
import ReactAnime from 'react-animejs';
import { FaBan } from "react-icons/fa";
const { Anime, stagger } = ReactAnime;

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
                    <GodPick God="Zhong Kui" Hover={false} Role="solo" />
                    <GodPick God="Cu Chulainn" Hover={true} Role="jung" />
                    <GodPick God="Anhur" Hover={true} Role="mid" />
                    <GodPick God="Erlang Shen" Hover={true} Role="supp" />
                    <GodPick God="Aphrodite" Hover={true} Role="adc" />
                </div>
                <div className="absolute inset-y-1/6 inset-x-1/6+ my-3 h-auto w-auto bg-white"></div>
                <div className="items-center bg-black w-2/5">

                </div>
                <div className="flex flex-col items-end bg-gradient-to-l from-snl-yellow to-black w-2/6 py-3">
                    <GodPick God="Apollo" Hover={true} Role="solo" />
                    <GodPick God="Ratatoskr" Hover={true} Role="jung" />
                    <GodPick God="Xing Tian" Hover={true} Role="mid" />
                    <GodPick God="Discordia" Hover={true} Role="supp" />
                    <GodPick God="" Hover={true} Role="adc" />
                </div>
            </div >
            <div className="flex w-full h-1/6">
                <div className="bg-gradient-to-r from-snl-dark-lighter to-black w-2/6">
                    <div className="flex ml-5 ban-box">
                        <div className="bans-left mx-2 overflow-hidden">
                            <div className="ban-god-icon-left"><img src="https://webcdn.hirezstudios.com/smite/god-icons/tiamat.jpg" alt="ban1" /></div>
                        </div>
                        <FaBan className="text-red-600 text-3xl absolute left-ban-1 mt-24" />
                        <div className="bans-left mx-2 overflow-hidden">
                            <div className="ban-god-icon-left"><img src="https://webcdn.hirezstudios.com/smite/god-icons/scylla.jpg" alt="ban2" /></div>
                        </div>
                        <FaBan className="text-red-600 text-3xl absolute left-ban-2 mt-24" />
                        <div className="bans-left ml-2 mr-12 overflow-hidden">
                            <div className="ban-god-icon-left"><img src="https://webcdn.hirezstudios.com/smite/god-icons/janus.jpg" alt="ban3" /></div>
                        </div>
                        <FaBan className="text-red-600 text-3xl absolute left-ban-3 mt-24" />
                        <div className="bans-left mx-2 overflow-hidden">
                            <div className="ban-god-icon-left"><img src="https://webcdn.hirezstudios.com/smite/god-icons/the-morrigan.jpg" alt="ban4" /></div>
                        </div>
                        <FaBan className="text-red-600 text-3xl absolute left-ban-4 mt-24" />
                        <div className="bans-left mx-2 overflow-hidden">
                            <div className="ban-god-icon-left"><img src="https://webcdn.hirezstudios.com/smite/god-icons/hel.jpg" alt="ban5" /></div>
                        </div>
                        <FaBan className="text-red-600 text-3xl absolute left-ban-5 mt-24" />
                    </div>
                </div>
                <div className="bg-black w-2/5">
                    <img className="snl-logo-bot mx-auto" src="https://i.imgur.com/1ghlJ1q.png" alt="SNL Logo"></img>
                </div>
                <div className="bg-gradient-to-l from-snl-yellow to-black w-2/6">
                    <div className="flex flex-row-reverse mr-5 ban-box">
                        <div className="bans-right mx-2 overflow-hidden">
                            <div className="ban-god-icon-right bg-achilles-portrait"><img src="https://webcdn.hirezstudios.com/smite/god-icons/guan-yu.jpg" alt="ban1" /></div>
                        </div>
                        <FaBan className="text-red-600 text-3xl absolute right-ban-1 mt-24" />
                        <div className="bans-right mx-2 overflow-hidden">
                            <div className="ban-god-icon-right bg-achilles-portrait"><img src="https://webcdn.hirezstudios.com/smite/god-icons/set.jpg" alt="ban2" /></div>
                        </div>
                        <FaBan className="text-red-600 text-3xl absolute right-ban-2 mt-24" />
                        <div className="bans-right ml-12 mx-2 overflow-hidden">
                            <div className="ban-god-icon-right bg-achilles-portrait"><img src="https://webcdn.hirezstudios.com/smite/god-icons/tsukuyomi.jpg" alt="ban3" /></div>
                        </div>
                        <FaBan className="text-red-600 text-3xl absolute right-ban-3 mt-24" />
                        <div className="bans-right mx-2 overflow-hidden">
                            <div className="ban-god-icon-right bg-achilles-portrait"><img src="https://webcdn.hirezstudios.com/smite/god-icons/nemesis.jpg" alt="ban4" /></div>
                        </div>
                        <FaBan className="text-red-600 text-3xl absolute right-ban-4 mt-24" />
                        <div className="bans-right mx-2 overflow-hidden">
                            <div className="ban-god-icon-right bg-achilles-portrait"><img src="https://webcdn.hirezstudios.com/smite/god-icons/fenrir.jpg" alt="ban5" /></div>
                        </div>
                        <FaBan className="text-red-600 text-3xl absolute right-ban-5 mt-24" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Pnb;