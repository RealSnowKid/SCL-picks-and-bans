import React, { useState, useEffect } from 'react';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';

export default function Currently({ data }) {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        setDetails(data);
    }, [data])

    let text;
    switch (true) {
        case details.ob1 === true:
            text = "Order First Ban";
            return (
                <h1 className="flex"><ImArrowLeft className="mr-2 mt-1" /> {text}</h1>
            );

        case details.ob2 === true:
            text = "Order Second Ban"
            return (
                <h1 className="flex"><ImArrowLeft className="mr-2 mt-1" /> {text}</h1>
            );

        case details.ob3 === true:
            text = "Order Third Ban"
            return (
                <h1 className="flex"><ImArrowLeft className="mr-2 mt-1" /> {text}</h1>
            );

        case details.ob4 === true:
            text = "Order Fourth Ban"
            return (
                <h1 className="flex"><ImArrowLeft className="mr-2 mt-1" /> {text}</h1>
            );

        case details.ob5 === true:
            text = "Order Fifth Ban"
            return (
                <h1 className="flex"><ImArrowLeft className="mr-2 mt-1" /> {text}</h1>
            );

        case details.cb1 === true:
            text = "Chaos First Ban"
            return (
                <h1 className="flex"><ImArrowRight className="mr-2 mt-1" /> {text}</h1>
            );

        case details.cb2 === true:
            text = "Chaos Second Ban"
            return (
                <h1 className="flex"><ImArrowRight className="mr-2 mt-1" /> {text}</h1>
            );

        case details.cb3 === true:
            text = "Chaos Third Ban"
            return (
                <h1 className="flex"><ImArrowRight className="mr-2 mt-1" /> {text}</h1>
            );

        case details.cb4 === true:
            text = "Chaos Fourth Ban"
            return (
                <h1 className="flex"><ImArrowRight className="mr-2 mt-1" /> {text}</h1>
            );

        case details.cb5 === true:
            text = "Chaos Fifth Ban"
            return (
                <h1 className="flex"><ImArrowRight className="mr-2 mt-1" /> {text}</h1>
            );

        case details.op1 === true:
            text = "Order First Pick"
            return (
                <h1 className="flex"><ImArrowLeft className="mr-2 mt-1" /> {text}</h1>
            );
        case details.op2 === true:
            text = "Order Second Pick"
            return (
                <h1 className="flex"><ImArrowLeft className="mr-2 mt-1" /> {text}</h1>
            );
        case details.op3 === true:
            text = "Order Third Pick"
            return (
                <h1 className="flex"><ImArrowLeft className="mr-2 mt-1" /> {text}</h1>
            );
        case details.op4 === true:
            text = "Order Fourth Pick"
            return (
                <h1 className="flex"><ImArrowLeft className="mr-2 mt-1" /> {text}</h1>
            );
        case details.op5 === true:
            text = "Order Fifth Pick"
            return (
                <h1 className="flex"><ImArrowLeft className="mr-2 mt-1" /> {text}</h1>
            );

        case details.cp1 === true:
            text = "Chaos First Pick"
            return (
                <h1 className="flex"><ImArrowRight className="mr-2 mt-1" /> {text}</h1>
            );

        case details.cp2 === true:
            text = "Chaos Second Pick"
            return (
                <h1 className="flex"><ImArrowRight className="mr-2 mt-1" /> {text}</h1>
            );

        case details.cp3 === true:
            text = "Chaos Third Pick"
            return (
                <h1 className="flex"><ImArrowRight className="mr-2 mt-1" /> {text}</h1>
            );

        case details.cp4 === true:
            text = "Chaos Fourth Pick"
            return (
                <h1 className="flex"><ImArrowRight className="mr-2 mt-1" /> {text}</h1>
            );

        case details.cp5 === true:
            text = "Chaos Fifth Pick"
            return (
                <h1 className="flex"><ImArrowRight className="mr-2 mt-1" /> {text}</h1>
            );

        default:
            return (
                <h1>Draft Finished</h1>
            );
    }
}