import React, { useState, useEffect } from 'react';
import ReactAnime from 'react-animejs';
import { FaBan } from "react-icons/fa";
const { Anime, stagger } = ReactAnime;

function Pnb() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex w-full h-1/6">
                <div className="flex items-center bg-gradient-to-r from-snl-dark-lighter to-black w-2/6">
                    <img className="team-logo mx-2" src="https://i.imgur.com/aewvQhD.png"></img>
                    <h1 className="text-center text-6xl font-bold text-white">2009 Ford Fiesta</h1>
                </div>
                <div className="flex content-between bg-gradient-to-l bg-black w-2/5">
                    <div className="w-full h-full my-2 bg-white"></div>
                </div>
                <div className="flex flex-row-reverse items-center bg-gradient-to-l from-snl-yellow to-black w-2/6">
                    <img className="team-logo ml-1" src="https://i.imgur.com/0XldNwG.png"></img>
                    <h1 className="text-center text-6xl font-bold text-white">The Salty Boys</h1>
                </div>
            </div>
            <div className="flex flex-row h-4/6">
                <div className="flex flex-col bg-gradient-to-r from-snl-dark-lighter to-black w-2/6 py-3">
                    <div className="h-32 w-80 mx-2 mb-2 bg-white"></div>
                    <div className="h-32 w-80 mx-2 my-2 bg-white"></div>
                    <div className="h-32 w-80 mx-2 my-2 bg-white"></div>
                    <div className="h-32 w-80 mx-2 my-2 bg-white"></div>
                    <div className="h-32 w-80 mx-2 mt-2 bg-white"></div>
                </div>
                <div className="absolute inset-y-1/6 inset-x-1/6+ my-3 h-auto w-auto bg-white"></div>
                <div className="items-center bg-gradient-to-l bg-black w-2/5">

                </div>
                <div className="flex flex-col items-end bg-gradient-to-l from-snl-yellow to-black w-2/6 py-3">
                    <div className="h-32 w-80 mx-2 mb-2 bg-white"></div>
                    <div className="h-32 w-80 mx-2 my-2 bg-white"></div>
                    <div className="h-32 w-80 mx-2 my-2 bg-white"></div>
                    <div className="h-32 w-80 mx-2 my-2 bg-white"></div>
                    <div className="h-32 w-80 mx-2 mt-2 bg-white"></div>
                </div>
            </div>
            <div className="flex w-full h-1/6 bg-black">
                <div className="bg-gradient-to-r from-snl-dark-lighter to-black w-2/6">
                    <div className="flex mx-5 my-8">
                        <div className="parallelogram-left mx-2 bg-red-600"></div>
                        <FaBan className="text-white text-2xl absolute left-ban-1 mt-24" />
                        <div className="parallelogram-left mx-2 bg-red-600"></div>
                        <FaBan className="text-white text-2xl absolute left-ban-2 mt-24" />
                        <div className="parallelogram-left ml-2 mr-12 bg-red-600"></div>
                        <FaBan className="text-white text-2xl absolute left-ban-3 mt-24" />
                        <div className="parallelogram-left mx-2 bg-red-600"></div>
                        <FaBan className="text-white text-2xl absolute left-ban-4 mt-24" />
                        <div className="parallelogram-left mx-2 bg-red-600"></div>
                        <FaBan className="text-white text-2xl absolute left-ban-5 mt-24" />
                    </div>
                </div>
                <div className="bg-gradient-to-l bg-black w-2/5">
                    <img className="snl-log-bot mx-auto" src="https://i.imgur.com/1ghlJ1q.png" alt="SNL Logo"></img>
                </div>
                <div className="bg-gradient-to-l from-snl-yellow to-black w-2/6">
                    <div className="flex flex-row-reverse mx-5 my-8">
                        <div className="parallelogram-right mx-2 bg-red-600"></div>
                        <FaBan className="text-white text-2xl absolute right-ban-1 mt-24" />
                        <div className="parallelogram-right mx-2 bg-red-600"></div>
                        <FaBan className="text-white text-2xl absolute right-ban-2 mt-24" />
                        <div className="parallelogram-right ml-12 mr-2 bg-red-600"></div>
                        <FaBan className="text-white text-2xl absolute right-ban-3 mt-24" />
                        <div className="parallelogram-right mx-2 bg-red-600"></div>
                        <FaBan className="text-white text-2xl absolute right-ban-4 mt-24" />
                        <div className="parallelogram-right mx-2 bg-red-600"></div>
                        <FaBan className="text-white text-2xl absolute right-ban-5 mt-24" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pnb;