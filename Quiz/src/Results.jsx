
function Results({ correctAnswers, restart, totalQuestions }) {

    return (<span className="results-display">
        You answered correctly to {correctAnswers} questions over {totalQuestions},<br/>
        with a precision of {Math.trunc((correctAnswers / totalQuestions) * 100)}%<br/>
        <button className="restart-quiz" onClick={restart}>Restart</button>
    </span>)
}

export default Results