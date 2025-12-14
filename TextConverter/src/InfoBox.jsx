
function InfoBox({ text }) {

    return (<div className='info-box'>
        <h3>Words Summary</h3>
        <span>{text.length > 0 ? text.split(" ").filter(e => { return e.length !== 0 }).length : 0} words, {text.length} characters</span><br />
        <span>{0.008 * text.split(" ")
            .filter(
                (element) => {
                    return element.length !== 0
                }
            ).length} minutes read</span>
    </div>)
}

export default InfoBox