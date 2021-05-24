// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import GodPick from './components/godPick';

function Kevingpoep() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex w-full h-full">
                <div className="flex items-center justify-between bg-gradient-to-r from-snl-dark-lighter to-black w-2/6">
                    <div className="flex flex-col my-auto">
                        <GodPick God="Nike" Hover={true} Role="solo" />
                    </div>
                </div>
                <div className="flex flex-row bg-black w-2/5">

                </div>
                <div className="flex flex-row-reverse items-center justify-between bg-gradient-to-l from-snl-yellow to-black w-2/6">
                </div>
            </div >
        </div >

    );
}

export default Kevingpoep;