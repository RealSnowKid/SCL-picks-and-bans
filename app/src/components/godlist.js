import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function GodList({pickedGods, pickNumber}) {
    const [gods, setGods] = useState([]);
    const [filteredGods, setFilteredGods] = useState([]);
    const [filter, setFilter] = useState("");
    const [selectedGod, setSelectedGod] = useState("");

    const selectGod = (godName) => {
        setSelectedGod(godName);
        // make call to function in parent here with godName and pickNumber for the hover.
    };
    //link this function to button 
    const lockGod = (e) => {
        e.preventDefault();

        if(selectedGod == "" || selectedGod == null)
        {
            alert("please select a god before trying to lock in.");
        }
        else {
            //use selectedGod and make call to function in parent with selectedGod and pickNumber.
        }
        
    };

    function isNotPicked(god) {
        if(pickedGods.includes(god.name.toLowerCase()))
        {
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

    //only runs on first render
    useEffect(async () => {
        await axios.get("https://smitenoobleague.xyz/smiteapi-service/God").then(res => {
            setGods(res.data.filter(isNotPicked));
            setFilteredGods(res.data.filter(isNotPicked));
        }).catch(err => {console.log(err);});
    }, []);
    //run everytime pickedGods get updated
    useEffect(() => {
        setGods(gods.filter(isNotPicked));
        setFilter("");
        setFilteredGods(gods.filter(isNotPicked));
    }, [pickedGods]);

        return (
            <div className="flex flex-col h-full mt-5">
            <input className="w-3/4 mx-auto my-1" type="text" placeholder="Search god..." value={filter} onChange={handleFilter} />  <button className="w-1/2 mx-auto bg-white rounded border border-black hover:bg-gray-300" type="submit" onClick={lockGod}>Lock in god</button>
            <div class="container mx-auto px-4 overflow-scroll h-4/5 mt-2 border-solid border-4 border-black">                 
            <section class="py-8 px-4">
              <div class="flex flex-wrap -mx-4 -mb-8">
                  {filteredGods?.length > 0 ? 
                  filteredGods.map((g, index) => (
                    <div class={`md:w-28 px-4 mb-8`} onClick={(e) => {selectGod(g.name.toLowerCase())}} ><img className={`rounded shadow-md ${g.name.toLowerCase() == selectedGod ? "border-solid border-4 border-blue-500" : ""}`} src={g.godIcon_URL} alt="" /></div>
                  )) : "" }
               
              </div>
            </section>
          </div>
      
        </div>);
    }