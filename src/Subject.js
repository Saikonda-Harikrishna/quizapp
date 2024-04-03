import React, { useState } from 'react'
import Question from './Question'


export function Java() {
    const javaQuestions = [
        {
            qnum: "1",
            ques: "Memory occupied by int?",
            opA: "1 byte",
            opB: "8 bytes",
            opC: "2 bytes",
            opD: "4 bytes",
            ans: "D"
        },
        {
            qnum: "2",
            ques: "Memory occupied by double?",
            opA: "1 byte",
            opB: "8 bytes",
            opC: "2 bytes",
            opD: "4 bytes",
            ans: "D"
        }
    ];

    const [answers, setAnswers] = useState({});

    const handleOnChange = (questionNum, selectedOption) => {
        setAnswers(prevState => ({
            ...prevState,
            [questionNum]: selectedOption
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted answers:", answers);
    };

    return (
        <div>
            <h1>JAVA ASSESSMENT</h1>
            <form onSubmit={handleSubmit}>
                {javaQuestions.map((question) => (
                    <Question
                        key={question.qnum}
                        qnum={question.qnum}
                        ques={question.ques}
                        opA={question.opA}
                        opB={question.opB}
                        opC={question.opC}
                        opD={question.opD}
                        ans={question.ans}
                        onChange={handleOnChange}
                    />
                ))}
                <br/><br/>
                <input type='submit' value='Get Result'/>
            </form>
        </div>
    );
}

export function SQL() {
    const sqlQuestions = [
        {
            qnum: "1",
            ques: "Memory occupied by varchar?",
            opA: "1 byte",
            opB: "8 bytes",
            opC: "2 bytes",
            opD: "4 bytes",
            ans: "D"
        },
        {
            qnum: "2",
            ques: "Memory occupied by double?",
            opA: "1 byte",
            opB: "8 bytes",
            opC: "2 bytes",
            opD: "4 bytes",
            ans: "D"
        }
    ];

    const [answers, setAnswers] = useState({});

    const handleOnChange = (questionNum, selectedOption) => {
        setAnswers(prevState => ({
            ...prevState,
            [questionNum]: selectedOption
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted answers:", answers);
    };

    return (
        <div>
            <h1>SQL ASSESSMENT</h1>
            <form onSubmit={handleSubmit}>
                {sqlQuestions.map((question) => (
                    <Question
                        key={question.qnum}
                        qnum={question.qnum}
                        ques={question.ques}
                        opA={question.opA}
                        opB={question.opB}
                        opC={question.opC}
                        opD={question.opD}
                        ans={question.ans}
                        onChange={handleOnChange}
                    />
                ))}
                <br/><br/>
                <input type='submit' value='Get Result'/>
            </form>
        </div>
    );
}

export function HTML() {
    const htmlQuestions = [
        {
            qnum: "1",
            ques: "Memory occupied by int?",
            opA: "1 byte",
            opB: "8 bytes",
            opC: "2 bytes",
            opD: "4 bytes",
            ans: "D"
        },
        {
            qnum: "2",
            ques: "Memory occupied by double?",
            opA: "1 byte",
            opB: "8 bytes",
            opC: "2 bytes",
            opD: "4 bytes",
            ans: "D"
        }
    ];

    const [answers, setAnswers] = useState({});

    const handleOnChange = (questionNum, selectedOption) => {
        setAnswers(prevState => ({
            ...prevState,
            [questionNum]: selectedOption
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted answers:", answers);
    };

    return (
        <div>
            <h1>HTML ASSESSMENT</h1>
            <form onSubmit={handleSubmit}>
                {htmlQuestions.map((question) => (
                    <Question
                        key={question.qnum}
                        qnum={question.qnum}
                        ques={question.ques}
                        opA={question.opA}
                        opB={question.opB}
                        opC={question.opC}
                        opD={question.opD}
                        ans={question.ans}
                        onChange={handleOnChange}
                    />
                ))}
                <br/><br/>
                <input type='submit' value='Get Result'/>
            </form>
        </div>
    );
}