import React from 'react';
import GodList from '../godlist';

export default function Step15({ updateFunc, alrdyPickedGods }) {
    function godHover(data) {
        updateFunc(["hover", data]);
    }

    function lockIn(data) {
        updateFunc(["lock", data]);
    }
    return (
        <div className="flex flex-col h-92% mt-1">
            <h1 className="text-2xl text-center text-white">Chaos Fourth Pick</h1>
            <GodList pickedGods={alrdyPickedGods} lockInGod={lockIn} hover={godHover} />
        </div>
    );
}