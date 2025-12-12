import { useState, useEffect } from 'react'
import Question from './Question';
import Results from './Results';
import Questions from './QuestionsDB';

function Quiz() {
    //Counter for correct answers
    const [correctAnswers, setCorrectAnswer] = useState(0);
    //Index for the current question
    const [currentQuestion, setCurrentQuestion] = useState(1);
    //State to animate the entrance and exit for each question
    const [animateQuiz, setAnimateQuiz] = useState(false);

    useEffect(() => {
        setAnimateQuiz(true);
    }, [])

    //Update the quiz animation after every submission
    useEffect(() => {
        setAnimateQuiz(false);

        let hideTimeout = setTimeout(() => {
            let enterTimeout = setTimeout(() => {
                setAnimateQuiz(true);
            }, 20);
            return () => clearTimeout(enterTimeout);
        }, 300);

        return () => {
            clearTimeout(hideTimeout);
        }
    }, [currentQuestion])

    const restartQuiz = () => {
        setCorrectAnswer(0);
        setCurrentQuestion(1);
    }

    return (<>
        <h2>Quiz App</h2>
        <div className={`quiz ${animateQuiz ? `animate` : ''}`}>

            {currentQuestion > Questions.length ?
                <Results correctAnswers={correctAnswers} restart={restartQuiz} totalQuestions={Questions.length} /> :
                <Question index={currentQuestion} updateCurrentIndex={setCurrentQuestion} updateCorrectIndex={setCorrectAnswer} />
            }
        </div>
    </>)
}

export default Quiz
