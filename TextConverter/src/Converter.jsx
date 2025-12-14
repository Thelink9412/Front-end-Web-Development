import { useState } from "react"
import NavBar from "./NavBar"
import InfoBox from "./InfoBox"
function Converter() {
    const [inputText, setInputText] = useState("");
    return(<div className='main-container'>
        <h2>Text Converter</h2>
        <textarea name="input-area" id="input-area" value={inputText} onChange={(e) => setInputText(e.target.value)}></textarea>
        <NavBar text={inputText} updateText={setInputText}/>
        <InfoBox text={inputText}/>
    </div>)
}

export default Converter