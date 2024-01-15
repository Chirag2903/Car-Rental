import React, { useState } from 'react'
import "../css/Question.css"

const Question = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };
    return (
        <div className="question">
            <div className="question-header">
                <h3>{question}</h3>
                <button onClick={toggleAnswer}>{showAnswer ? '-' : '+'}</button>
            </div>
            {showAnswer && <p>{answer}</p>}
        </div>
    )
}

export default Question