import React, { useState, useEffect } from 'react';

function Kevingpoep() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex w-full h-full">
                <div className="flex items-center justify-between bg-gradient-to-r from-snl-dark-lighter to-black w-2/6"></div>
                <div className="flex content-between bg-black w-2/5"></div>
                <div className="flex flex-row-reverse items-center justify-between bg-gradient-to-l from-snl-yellow to-black w-2/6"></div>
            </div>
        </div>
    );
}

export default Kevingpoep;