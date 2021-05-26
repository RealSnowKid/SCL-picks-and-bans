import React, { useState, useEffect } from 'react'
import SockJS from 'sockjs-client';
import MatchInfo from './components/matchInfo';
import Step0 from './components/steps/step0';
import Step1 from './components/steps/step1';
import Step2 from './components/steps/step2';
import Step3 from './components/steps/step3';
import Step4 from './components/steps/step4';
import Step5 from './components/steps/step5';
import Step6 from './components/steps/step6';
import Step7 from './components/steps/step7';
import Step8 from './components/steps/step8';
import Step9 from './components/steps/step9';
import Step10 from './components/steps/step10';
import Step11 from './components/steps/step11';
import Step12 from './components/steps/step12';
import Step13 from './components/steps/step13';
import Step14 from './components/steps/step14';
import Step15 from './components/steps/step15';
import Step16 from './components/steps/step16';
import Step17 from './components/steps/step17';

let json = [
    {
        matchScoreT1: 0,
        matchScoreT2: 0,
        patch: "8.5",
        ob1: false,
        cb1: false,
        ob2: false,
        cb2: false,
        ob3: false,
        cb3: false,
        op1: false,
        cp1: false,
        cp2: false,
        op2: false,
        op3: false,
        cp3: false,
        cb4: false,
        ob4: false,
        cb5: false,
        ob5: false,
        cp4: false,
        op4: false,
        op5: false,
        cp5: false
    },
    {
        name: "Team 1",
        logo: "https://i.imgur.com/thNPVvc.png",
        leagueScore: "0-0",
        ban1: "",
        ban2: "",
        ban3: "",
        pick1: "",
        pick1Hover: true,
        pick2: "",
        pick2Hover: true,
        pick3: "",
        pick3Hover: true,
        ban4: "",
        ban5: "",
        pick4: "",
        pick4Hover: true,
        pick5: "",
        pick5Hover: true,
    },
    {
        name: "Team 2",
        logo: "https://i.imgur.com/thNPVvc.png",
        leagueScore: "0-0",
        ban1: "",
        ban2: "",
        ban3: "",
        pick1: "",
        pick1Hover: true,
        pick2: "",
        pick2Hover: true,
        pick3: "",
        pick3Hover: true,
        ban4: "",
        ban5: "",
        pick4: "",
        pick4Hover: true,
        pick5: "",
        pick5Hover: true,
    }
]

export default function Controller() {
    const sock = new SockJS('https://scl-picks-and-bans.herokuapp.com/pnb');
    const [things, setData] = useState([]);
    const [step, setStep] = useState(0);
    const [pickedGods, setPickedGods] = useState([""]);

    function updateStepData(newStepData) {
        switch (step) {
            case 0:
                newStepData.preventDefault();
                if (newStepData.target[0].value !== "") {
                    json[0].matchScoreT1 = newStepData.target[0].value.split('-')[0];
                    json[0].matchScoreT2 = newStepData.target[0].value.split('-')[1];
                }
                if (newStepData.target[1].value !== "") {
                    json[0].patch = newStepData.target[1].value;
                }
                json[0].ob1 = true;
                if (newStepData.target[2].value !== "") {
                    json[1].name = newStepData.target[2].value;
                }
                if (newStepData.target[3].value !== "") {
                    json[1].logo = newStepData.target[3].value;
                }
                if (newStepData.target[4].value !== "") {
                    json[1].leagueScore = newStepData.target[4].value;
                }
                if (newStepData.target[5].value !== "") {
                    json[2].name = newStepData.target[5].value;
                }
                if (newStepData.target[6].value !== "") {
                    json[2].logo = newStepData.target[6].value;
                }
                if (newStepData.target[7].value !== "") {
                    json[2].leagueScore = newStepData.target[7].value;
                }
                setStep(1);
                break;

            case 1:
                if (newStepData[0] === "lock") {
                    json[0].ob1 = false;
                    json[0].cb1 = true;
                    json[1].ban1 = newStepData[1];
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(2);
                }
                break;

            case 2:
                if (newStepData[0] === "lock") {
                    json[0].cb1 = false;
                    json[0].ob2 = true;
                    json[2].ban1 = newStepData[1];
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(3);
                }
                break;

            case 3:
                if (newStepData[0] === "lock") {
                    json[0].ob2 = false;
                    json[0].cb2 = true;
                    json[1].ban2 = newStepData[1];
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(4);
                }
                break;
            case 4:
                if (newStepData[0] === "lock") {
                    json[0].cb2 = false;
                    json[0].ob3 = true;
                    json[2].ban2 = newStepData[1];
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(5);
                }
                break;
            case 5:
                if (newStepData[0] === "lock") {
                    json[0].ob3 = false;
                    json[0].cb3 = true;
                    json[1].ban3 = newStepData[1];
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(6);
                }
                break;
            case 6:
                if (newStepData[0] === "lock") {
                    json[0].cb3 = false;
                    json[0].op1 = true;
                    json[2].ban3 = newStepData[1];
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(7);
                }
                break;
            case 7:
                if (newStepData[0] === "hover") {
                    json[1].pick1 = newStepData[1];
                    json[1].pick1Hover = true;
                }
                if (newStepData[0] === "lock") {
                    json[0].op1 = false;
                    json[0].cp1 = true;
                    json[0].cp2 = true;
                    json[1].pick1 = newStepData[1];
                    json[1].pick1Hover = false;
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(8);
                }
                break;
            case 8:
                switch (newStepData[0]) {
                    case "hover":
                        json[2].pick1 = newStepData[1];
                        json[2].pick1Hover = true;
                        break;
                    case "lock":
                        json[0].cp1 = false;
                        json[2].pick1 = newStepData[1];
                        json[2].pick1Hover = false;
                        setPickedGods([...pickedGods, newStepData[1]]);
                        break;
                    case "hover2":
                        json[2].pick2 = newStepData[1];
                        json[2].pick2Hover = true;
                        break;
                    case "lock2":
                        json[0].cp2 = false;
                        json[2].pick2 = newStepData[1];
                        json[2].pick2Hover = false;
                        setPickedGods([...pickedGods, newStepData[1]]);
                        break;
                    default:
                        console.warn("Uh oh step 8");
                        break;
                }
                if (json[2].pick1Hover !== true && json[2].pick2Hover !== true) {
                    setStep(9);
                    json[0].op2 = true;
                    json[0].op3 = true;
                }
                break;
            case 9:
                switch (newStepData[0]) {
                    case "hover":
                        json[1].pick2 = newStepData[1];
                        json[1].pick2Hover = true;
                        break;
                    case "lock":
                        json[0].op2 = false;
                        json[1].pick2 = newStepData[1];
                        json[1].pick2Hover = false;
                        setPickedGods([...pickedGods, newStepData[1]]);
                        break;
                    case "hover2":
                        json[1].pick3 = newStepData[1];
                        json[1].pick3Hover = true;
                        break;
                    case "lock2":
                        json[0].op3 = false;
                        json[1].pick3 = newStepData[1];
                        json[1].pick3Hover = false;
                        setPickedGods([...pickedGods, newStepData[1]]);
                        break;
                    default:
                        console.warn("Uh oh step 9");
                        break;
                }
                if (json[1].pick2Hover !== true && json[1].pick3Hover !== true) {
                    setStep(10);
                    json[0].cp3 = true;
                }
                break;
            case 10:
                if (newStepData[0] === "hover") {
                    json[2].pick3 = newStepData[1];
                    json[2].pick3Hover = true;
                }
                if (newStepData[0] === "lock") {
                    json[0].cp3 = false;
                    json[0].cb4 = true;
                    json[2].pick3 = newStepData[1];
                    json[2].pick3Hover = false;
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(11);
                }
                break;
            case 11:
                if (newStepData[0] === "lock") {
                    json[0].cb4 = false;
                    json[0].ob4 = true;
                    json[2].ban4 = newStepData[1];
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(12);
                }
                break;
            case 12:
                if (newStepData[0] === "lock") {
                    json[0].ob4 = false;
                    json[0].cb5 = true;
                    json[1].ban4 = newStepData[1];
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(13);
                }
                break;
            case 13:
                if (newStepData[0] === "lock") {
                    json[0].cb5 = false;
                    json[0].ob5 = true;
                    json[2].ban5 = newStepData[1];
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(14);
                }
                break;
            case 14:
                if (newStepData[0] === "lock") {
                    json[0].ob5 = false;
                    json[0].cp4 = true;
                    json[1].ban5 = newStepData[1];
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(15);
                }
                break;
            case 15:
                if (newStepData[0] === "hover") {
                    json[2].pick4 = newStepData[1];
                    json[2].pick4Hover = true;
                }
                if (newStepData[0] === "lock") {
                    json[0].cp4 = false;
                    json[0].op4 = true;
                    json[0].op5 = true;
                    json[2].pick4 = newStepData[1];
                    json[2].pick4Hover = false;
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(16);
                }
                break;
            case 16:
                switch (newStepData[0]) {
                    case "hover":
                        json[1].pick4 = newStepData[1];
                        json[1].pick4Hover = true;
                        break;
                    case "lock":
                        json[0].op4 = false;
                        json[1].pick4 = newStepData[1];
                        json[1].pick4Hover = false;
                        setPickedGods([...pickedGods, newStepData[1]]);
                        break;
                    case "hover2":
                        json[1].pick5 = newStepData[1];
                        json[1].pick5Hover = true;
                        break;
                    case "lock2":
                        json[0].op5 = false;
                        json[1].pick5 = newStepData[1];
                        json[1].pick5Hover = false;
                        setPickedGods([...pickedGods, newStepData[1]]);
                        break;
                    default:
                        console.warn("Uh oh step 16");
                        break;
                }
                if (json[1].pick4Hover !== true && json[1].pick5Hover !== true) {
                    setStep(17);
                    json[0].cp5 = true;
                }
                break;
            case 17:
                if (newStepData[0] === "hover") {
                    json[2].pick5 = newStepData[1];
                    json[2].pick5Hover = true;
                }
                if (newStepData[0] === "lock") {
                    json[0].cp5 = false;
                    json[2].pick5 = newStepData[1];
                    json[2].pick5Hover = false;
                    setPickedGods([...pickedGods, newStepData[1]]);
                    setStep(1);
                }
                break;
            default:
                break;
        }

        console.log(json);
        setTimeout(1000);
        sock.send(JSON.stringify(json));
    }

    useEffect(() => {
        sock.onopen = () => {
            console.log('open');
        };

        sock.onclose = () => {
            console.log('close');
        };

        sock.onmessage = (e) => {
            setData(JSON.parse(e.data));
        };

        return () => {
            sock.close();
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div className="flex flex-col h-screen">
            <div className="w-full bg-yellow-600 text-center">
                <h1 className="text-6xl text-white mt-0.5 mb-0.5">SCL PICKS & BANS CONTROLLER PAGE</h1>
            </div>
            <hr className="h-2 border-black bg-black" />
            <div className="flex flex-row w-full h-full">
                <div className="w-1/2 h-full bg-snl-yellow">
                    {step === 0 ? <Step0 updateFunc={updateStepData} /> : <></>}
                    {step === 1 ? <Step1 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 2 ? <Step2 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 3 ? <Step3 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 4 ? <Step4 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 5 ? <Step5 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 6 ? <Step6 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 7 ? <Step7 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 8 ? <Step8 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 9 ? <Step9 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 10 ? <Step10 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 11 ? <Step11 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 12 ? <Step12 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 13 ? <Step13 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 14 ? <Step14 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 15 ? <Step15 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 16 ? <Step16 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                    {step === 17 ? <Step17 updateFunc={updateStepData} alrdyPickedGods={pickedGods} /> : <></>}
                </div>
                <div className="w-1/2 h-full bg-snl-dark">
                    <div className="w-full flex">
                        <MatchInfo message={things} stepNumber={step} />
                    </div>
                </div>
            </div>
        </div>
    )
}