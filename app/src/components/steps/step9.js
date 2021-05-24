import React from 'react'

export default function Step9({ updateFunc }) {
    return (
        <form className="flex flex-col h-20" onSubmit={updateFunc}>
            <h1 className="text-2xl mx-auto">Order Second & Third Pick</h1>
            <input className="w-3/4 mx-auto my-1" type="text" placeholder="God" />
            <input className="w-3/4 mx-auto my-1" type="text" placeholder="God" />
            <button className="w-1/2 mx-auto bg-white rounded border border-black hover:bg-gray-300" type="submit">Send</button>
        </form>
    )
}