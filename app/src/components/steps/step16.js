import React, { useState } from 'react';
import GodList from '../godlist';

export default function Step16({ updateFunc, alrdyPickedGods }) {
    const [lock1, setLock1] = useState(false);
    const [lock2, setLock2] = useState(false);

    function godHover(data) {
        updateFunc(["hover", data]);
    }

    function godHover2(data) {
        updateFunc(["hover2", data]);
    }

    function lockIn(data) {
        updateFunc(["lock", data]);
        setLock1(true);
    }

    function lockIn2(data) {
        updateFunc(["lock2", data]);
        setLock2(true);
    }
    return (
        <div className="flex flex-col h-92% mt-1">
            <h1 className="text-2xl text-center text-white">Order Fourth Pick {lock1 ? "Done" : ""}</h1>
            {lock1 ? <></> : <GodList pickedGods={alrdyPickedGods} lockInGod={lockIn} hover={godHover} />}
            <h1 className="text-2xl text-center text-white">Order Fifth Pick {lock2 ? "Done" : ""}</h1>
            {lock2 ? <></> : <GodList pickedGods={alrdyPickedGods} lockInGod={lockIn2} hover={godHover2} />}
        </div>
    );
}