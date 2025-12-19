import { useState } from "react"

function Box({ generateRandomColor, dimensions, initialColor }) {
    const [previousColors, setPreviousColors] = useState([initialColor]);
    const [currentColor, setCurrentColor] = useState(initialColor);

    function handleColorChange() {
        let colorCopy;
        do {
            colorCopy = generateRandomColor();
        } while (previousColors.indexOf(colorCopy) >= 0)

        setCurrentColor(colorCopy);
        setPreviousColors(arr => [...arr, colorCopy]);
    }

    const boxStyle = {
        width: `${dimensions}px`,
        height: `${dimensions}px`,
        background: currentColor
    }

    return (<div className='box' style={boxStyle} onClick={handleColorChange}></div>)
}

export default Box