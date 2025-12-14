import React, { useEffect, useState } from 'react';

function NavBar({ text, updateText }) {
    const [outputText, setOutputText] = useState(text);

    const handleUppercase = () => {
        updateText(prev => prev.toUpperCase());
    }

    const handleLowercase = () => {
        updateText(prev => prev.toLowerCase());
    }

    const handleClearAll = () => {
        updateText("");
    }

    const handleCopy = () => {
        if (text === "")
            return;

        const type = "text/plain";
        const clipboardItemData = {
            [type]: text,
        };
        const clipboardItem = new ClipboardItem(clipboardItemData);
        navigator.clipboard.write([clipboardItem]);
    }

    const handleClearWhitespaces = () => {
        updateText(prev => prev.split(" ").filter(e => { return e.length !== 0 }).join(" "));
    }

    const handleReverseWord = () => {
        const words = text.split(" ").filter(e => { return e.length !== 0 });
        let newArray = [];
        
        words.forEach((word) => {
            newArray.push(word.split("").reverse().join(""));
        });

        updateText(newArray.join(" "));
    }

    const handleReverseSentence = () => {
        const words = text.split(" ").filter(e => { return e.length !== 0 });
        let newArray = [];
        
        words.forEach((word) => {
            newArray.unshift(word);
        });

        updateText(newArray.join(" "));
    }

    return (<nav className='nav-bar'>
        <button className='uppercase-btn' onClick={handleUppercase}>UPPERCASE</button>
        <button className='lowercase-btn' onClick={handleLowercase}>lowercase</button>
        <button className='clear-all-btn' onClick={handleClearAll}>Clear All</button>
        <button className='copy-btn' onClick={handleCopy}>Copy to Clipboard</button>
        <button className='clear-whitespaces-btn' onClick={handleClearWhitespaces}>Clear whitespaces</button>
        <button className='reverse-word-btn' onClick={handleReverseWord}>Reverse Word</button>
        <button className='reverse-sentence-btn' onClick={handleReverseSentence}>Reverse Sentence</button>
    </nav>)
}

export default NavBar