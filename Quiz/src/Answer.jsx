
function Answer(props) {

    return (<div className="answer">
        <input type="radio"
            name="answer"
            value={props.text}
            onChange={(e) => props.selectAnswer(e.target.value)}
            checked={props.currentAnswer === props.text}
        /> {props.text}
    </div>)
}

export default Answer