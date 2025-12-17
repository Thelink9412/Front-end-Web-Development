import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Notify({display, msg}) {
    const [animateNotify, setAnimateNotify] = useState(false);
    const [showNotify, setShowNotify] = useState(false);
    

    //Pop up animation
    useEffect(() => {
        if(display) {
            setShowNotify(true);
            let animateTimeout = setTimeout(() => {
                setAnimateNotify(true);
            }, 20);
            return () => clearTimeout(animateTimeout);
        } else {
            setAnimateNotify(false);
            let hideTimeout = setTimeout(() => {
                setShowNotify(false);
            }, 300);
            return () => clearTimeout(hideTimeout);
        }
    }, [display])

    if (!showNotify && !animateNotify) return null;

    return createPortal(
        <div className={`notify ${animateNotify ? 'animate' : ''}`}>
            <span>{msg}</span>
        </div>,
        document.body
    )
}

export default Notify