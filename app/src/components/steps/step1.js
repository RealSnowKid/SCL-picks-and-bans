import React from 'react';
import GodList from '../godlist';

export default function Step1({ updateFunc, alrdyPickedGods }) {
    function lockIn(data) {
        updateFunc(["lock", data]);
    }
    return (
        <div className="flex flex-col h-92% mt-1">
            <h1 className="text-2xl text-center text-white">Order First Ban</h1>
            <GodList pickedGods={alrdyPickedGods} lockInGod={lockIn} />
        </div>
    );
}