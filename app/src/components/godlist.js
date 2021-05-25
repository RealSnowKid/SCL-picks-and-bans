import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function GodList({ pickedGods, hover, lockInGod }) {
    const [gods, setGods] = useState([]);
    const [filteredGods, setFilteredGods] = useState([]);
    const [filter, setFilter] = useState("");
    const [selectedGod, setSelectedGod] = useState("");
    const [lockedIn, setLockedIn] = useState(false);

    const selectGod = (godName) => {
        setSelectedGod(godName);
        if (hover !== undefined) {
            hover(godName)
        }
    };

    const lockGod = (e) => {
        e.preventDefault();

        if (selectedGod === "" || selectedGod === null) {
            alert("please select a god before trying to lock in.");
        }
        else {
            //use selectedGod and make call to function in parent with selectedGod and pickNumber.
            lockInGod(selectedGod);
        }

    };

    function isNotPicked(god) {
        if (pickedGods.includes(god.name.toLowerCase())) {
            return false;
        }
        else {
            return true;
        }
    }

    const handleFilter = (e) => {
        setFilter(e.target.value);
        setFilteredGods(gods.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase())));
        setSelectedGod("");
    };

    useEffect(async () => {
        await axios.get("https://smitenoobleague.xyz/smiteapi-service/God").then(res => {
            setGods(res.data.filter(isNotPicked));
            setFilteredGods(res.data.filter(isNotPicked));
        }).catch(err => { console.log(err); });
    }, []);

    useEffect(() => {
        setGods(gods.filter(isNotPicked));
        setFilter("");
        setFilteredGods(gods.filter(isNotPicked));
    }, [pickedGods]);

    return (
        <>
            <input className="w-3/4 mx-auto my-1" type="text" placeholder="Search god..." value={filter} onChange={handleFilter} />
            <button className="w-1/2 mx-auto bg-white rounded border border-black hover:bg-gray-300" type="submit" onClick={lockGod}>Lock in god</button>
            <div className="container mx-auto px-4 overflow-scroll overflow-x-hidden h-4/5 mt-2 border-t-4 border-b-4 border-white">
                <section className="pt-6 px-4">
                    <div className="flex flex-wrap">
                        {filteredGods?.length > 0 ?
                            filteredGods.map((g, index) => (
                                <div key={g.id} className={`md:w-24 px-4 mb-6`} onClick={(e) => { selectGod(g.name.toLowerCase()) }} ><img className={`rounded shadow-md ${g.name.toLowerCase() == selectedGod ? "border-solid border-4 border-blue-500" : ""}`} src={g.godIcon_URL} alt="" /></div>
                            )) : ""}
                    </div>
                </section>
            </div>
        </>
    );
}