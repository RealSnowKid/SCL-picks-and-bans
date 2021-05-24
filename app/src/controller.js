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
        patch: "",
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
    const sock = new SockJS('http://localhost:9999/pnb');
    const [things, setData] = useState([]);
    const [step, setStep] = useState(0);

    function updateStepData(newStepData) {
        newStepData.preventDefault();
        switch (step) {
            case 0:
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
                json[0].ob1 = false;
                json[0].cb1 = true;
                if (newStepData.target[0].value !== "") {
                    json[1].ban1 = newStepData.target[0].value;
                }
                setStep(2);
                break;

            case 2:
                json[0].cb1 = false;
                json[0].ob2 = true;
                if (newStepData.target[0].value !== "") {
                    json[2].ban1 = newStepData.target[0].value;
                }
                setStep(3);
                break;

            case 3:
                json[0].ob2 = false;
                json[0].cb2 = true;
                if (newStepData.target[0].value !== "") {
                    json[1].ban2 = newStepData.target[0].value;
                }
                setStep(4);
                break;
            case 4:
                json[0].cb2 = false;
                json[0].ob3 = true;
                if (newStepData.target[0].value !== "") {
                    json[2].ban2 = newStepData.target[0].value;
                }
                setStep(5);
                break;
            case 5:
                json[0].ob2 = false;
                json[0].cb2 = true;
                if (newStepData.target[0].value !== "") {
                    json[1].ban2 = newStepData.target[0].value;
                }
                setStep(6);
                break;
            case 6:
                json[0].ob2 = false;
                json[0].cb2 = true;
                if (newStepData.target[0].value !== "") {
                    json[1].ban2 = newStepData.target[0].value;
                }
                setStep(7);
                break;
            case 7:
                json[0].ob2 = false;
                json[0].cb2 = true;
                if (newStepData.target[0].value !== "") {
                    json[1].ban2 = newStepData.target[0].value;
                }
                setStep(8);
                break;
            case 8:
                json[0].ob2 = false;
                json[0].cb2 = true;
                if (newStepData.target[0].value !== "") {
                    json[1].ban2 = newStepData.target[0].value;
                }
                setStep(9);
                break;
            case 9:
                json[0].ob2 = false;
                json[0].cb2 = true;
                if (newStepData.target[0].value !== "") {
                    json[1].ban2 = newStepData.target[0].value;
                }
                setStep(10);
                break;
            case 10:
                json[0].ob2 = false;
                json[0].cb2 = true;
                if (newStepData.target[0].value !== "") {
                    json[1].ban2 = newStepData.target[0].value;
                }
                setStep(11);
                break;
            case 11:
                json[0].ob2 = false;
                json[0].cb2 = true;
                if (newStepData.target[0].value !== "") {
                    json[1].ban2 = newStepData.target[0].value;
                }
                setStep(12);
                break;
            case 12:
                json[0].ob2 = false;
                json[0].cb2 = true;
                if (newStepData.target[0].value !== "") {
                    json[1].ban2 = newStepData.target[0].value;
                }
                setStep(13);
                break;

            default:
                break;
        }

        console.log(json);
        sock.send(JSON.stringify(json));
    }

    useEffect(() => {
        sock.onopen = () => {
            console.log('open');
        };

        sock.onclose = () => {
            console.log('close');
        };

        return () => {
            sock.close();
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        sock.onmessage = (e) => {
            setData(JSON.parse(e.data));
        };
        // eslint-disable-next-line
    }, [updateStepData])

    return (
        <div className="flex flex-col h-screen">
            <div className="w-full bg-yellow-600 h-20 text-center">
                <h1 className="text-7xl text-white mt-1">SCL PICKS & BANS CONTROLLER PAGE</h1>
            </div>
            <hr className="h-2 border-black bg-black" />
            <div className="flex flex-row w-full h-full">
                <div className="w-1/2 h-full bg-snl-yellow">
                    {step === 0 ? <Step0 updateFunc={updateStepData} /> : <></>}
                    {step === 1 ? <Step1 updateFunc={updateStepData} /> : <></>}
                    {step === 2 ? <Step2 updateFunc={updateStepData} /> : <></>}
                    {step === 3 ? <Step3 updateFunc={updateStepData} /> : <></>}
                    {step === 4 ? <Step4 updateFunc={updateStepData} /> : <></>}
                    {step === 5 ? <Step5 updateFunc={updateStepData} /> : <></>}
                    {step === 6 ? <Step6 updateFunc={updateStepData} /> : <></>}
                    {step === 7 ? <Step7 updateFunc={updateStepData} /> : <></>}
                    {step === 8 ? <Step8 updateFunc={updateStepData} /> : <></>}
                    {step === 9 ? <Step9 updateFunc={updateStepData} /> : <></>}
                    {step === 10 ? <Step10 updateFunc={updateStepData} /> : <></>}
                    {step === 11 ? <Step11 updateFunc={updateStepData} /> : <></>}
                    {step === 12 ? <Step12 updateFunc={updateStepData} /> : <></>}
                    {step === 13 ? <Step13 updateFunc={updateStepData} /> : <></>}
                    {step === 14 ? <Step14 updateFunc={updateStepData} /> : <></>}
                    {step === 15 ? <Step15 updateFunc={updateStepData} /> : <></>}
                    {step === 16 ? <Step16 updateFunc={updateStepData} /> : <></>}
                    {step === 17 ? <Step17 updateFunc={updateStepData} /> : <></>}
                </div>
                <div className="w-1/2 h-full bg-snl-dark">
                    <div className="w-full flex">
                        <MatchInfo message={things} stepNumber={step}/>
                    </div>
                </div>
            </div>
        </div>
    )
}