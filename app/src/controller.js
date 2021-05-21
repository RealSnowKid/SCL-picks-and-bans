import React, { useState, useEffect } from 'react'
import SockJS from 'sockjs-client';
import Message from './components/Message';

export default function Controller() {
    const sock = new SockJS('http://localhost:9999/pnb');
    const [things, setData] = useState();
    const [msg, setMsg] = useState([]);

    useEffect(() => {
        sock.onopen = function () {
            console.log('open');
        };

        sock.onclose = function () {
            console.log('close');
        };

        return () => {
            sock.close();
        }
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let json = [
            {
                name: e.target[0].value,
            },
            {
                name: e.target[1].value,
            }
        ]
        // sock.send(e.target[0].value);
        sock.send(JSON.stringify(json));
    }

    useEffect(() => {
        sock.onmessage = function (e) {
            setData(JSON.parse(e.data));
            console.log(JSON.parse(e.data));
        };
    }, [handleFormSubmit])

    useEffect(() => {
        // console.log(things);
        setMsg([...msg, things]);
    }, [things])

    return (
        <div className="flex flex-col h-screen">
            <div className="w-full bg-yellow-600 h-20 text-center">
                <h1 className="text-7xl text-white mt-1">CONTROLLER PAGE</h1>
            </div>
            <hr className="h-2 border-black bg-black" />
            <div className="flex flex-row w-full h-full">
                <div className="w-1/2 h-full bg-snl-yellow">
                    <form className="flex flex-col h-20 justify-between" onSubmit={handleFormSubmit}>
                        <input className="w-1/2 mx-auto" type="text" placeholder="Team 1 Name" />
                        <input className="w-1/2 mx-auto" type="text" placeholder="Team 2 Name" />
                        <button className="w-1/2 mx-auto bg-white rounded border border-black hover:bg-gray-300" type="submit">Send</button>
                    </form>
                </div>
                <div className="w-1/2 h-full bg-snl-dark">
                    {
                        msg.map((message) => {
                            <Message message={message} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}