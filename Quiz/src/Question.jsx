import { useState } from "react";
import Questions from "./QuestionsDB";
import Answer from "./Answer";
import { useEffect } from "react";
import Notify from "./Notify";

function Question(props) {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [showNotify, setShowNotify] = useState(false);

    const checkAnswer = () => {
        if (selectedAnswer === "") return;

        setShowNotify(true);
        const isCorrect = selectedAnswer === Questions[props.index - 1].correctAnswer;
        if (isCorrect)
            props.updateCorrectIndex(i => i + 1)

    }

    //Setting the notify's animation state
    useEffect(() => {
        if (!showNotify) return;
        
        let notifyTimeout = setTimeout(() => {
            setShowNotify(false);
            
        }, 2000)

        return () => {
            clearTimeout(notifyTimeout);
            setTimeout(() => props.updateCurrentIndex(i => i + 1), 400);
        }
    }, [showNotify])

    return (<>
        <h4>Question {props.index}</h4>
        <span className="question">{Questions[props.index - 1].question}</span>
        <div className="answers-container">
            {Questions[props.index - 1].answers.map((a, index) => {
                return <Answer key={index} text={a} selectAnswer={setSelectedAnswer} currentAnswer={selectedAnswer} />
            })}
            <button className="submit-answer" onClick={checkAnswer}>Submit</button>
        </div>
        <Notify display={showNotify} isCorrect={selectedAnswer === Questions[props.index - 1].correctAnswer} />
    </>);
}

export default Question