import React, { useState, useEffect } from 'react'

export default function Controller() {
    return (
        <div className="flex flex-col h-screen">
            <div className="w-full bg-yellow-600 h-20 text-center">
                <h1 className="text-7xl text-white mt-1">CONTROLLER PAGE</h1>
            </div>
            <hr className="h-2 border-black bg-black" />
            <div className="flex flex-row w-full h-full">
                <div className="w-1/2 h-full bg-snl-yellow">

                </div>
                <div className="w-1/2 h-full bg-snl-dark">

                </div>
            </div>
        </div>
    )
}