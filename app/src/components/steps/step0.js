import React from 'react'

export default function Step0({ updateFunc }) {
    return (
        <form className="flex flex-col h-20" onSubmit={updateFunc}>
            <h1 className="text-2xl mx-auto">General Information</h1>
            <input className="w-3/4 mx-auto my-1" type="text" placeholder="Score (Format: 0-0)" />
            <input className="w-3/4 mx-auto my-1" type="text" placeholder="Patch (Format: 8.5)" />
            <div className="w-full flex mt-2">
                <div className="w-1/2 flex flex-col mx-1">
                    <h1 className="text-2xl mx-auto">Team 1</h1>
                    <input className="w-full mx-auto my-1" type="text" placeholder="Team 1 Name" />
                    <input className="w-full mx-auto my-1" type="text" placeholder="Team 1 Logo URL" />
                    <input className="w-full mx-auto my-1" type="text" placeholder="Team 1 League Score (Format: 0-0)" />
                </div>
                <div className="w-1/2 flex flex-col mx-1">
                    <h1 className="text-2xl mx-auto">Team 2</h1>
                    <input className="w-full mx-auto my-1" type="text" placeholder="Team 2 Name" />
                    <input className="w-full mx-auto my-1" type="text" placeholder="Team 2 Logo URL" />
                    <input className="w-full mx-auto my-1" type="text" placeholder="Team 2 League Score (Format: 0-0)" />
                </div>
            </div>
            <button className="w-1/2 mx-auto bg-white rounded border border-black hover:bg-gray-300" type="submit">Send</button>
        </form>
    )
}