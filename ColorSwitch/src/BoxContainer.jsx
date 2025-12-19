import React, { useEffect, useState } from 'react';
import Box from './Box';

function BoxContainer() {
    const numberOfBoxesPerRow = 14;
    const COLS = 3;
    const [singleBoxHeight, setSingleBoxHeight] = useState(window.innerWidth / numberOfBoxesPerRow);
    const [boxesArray, setBoxesArray] = useState([]);
    const [allowPopolate, setAllowPopolate] = useState(true)

    function getRandomColor() {
        const rand = Math.floor(Math.random() * 0x1000000);
        return `#${rand.toString(16).padStart(6, '0')}`;
    }

    function popolateArray() {
        let localArray = [];
        for (let i = 0; i < numberOfBoxesPerRow * COLS; i++) {
            localArray.push(getRandomColor());
        }

        setBoxesArray(localArray);
    }

    useEffect(() => {
        if (allowPopolate)
            popolateArray()

        setAllowPopolate(false);
        window.addEventListener("resize", () => {
            setSingleBoxHeight(window.innerWidth / numberOfBoxesPerRow)
        })
    }, [])

    let boxContainerStyle = {
        width: '100vw',
        height: `${singleBoxHeight * COLS}px`,
        display: 'flex',
        flexWrap: 'wrap',
    }
    
    return (<div className='box-container' style={boxContainerStyle}>
        {boxesArray.map((box, index) => {
            return <Box key={index} generateRandomColor={getRandomColor} dimensions={singleBoxHeight} initialColor={box} />
        })}
    </div>)
}

export default BoxContainer