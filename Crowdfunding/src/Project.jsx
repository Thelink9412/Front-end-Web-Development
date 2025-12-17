import { useEffect, useState } from "react"
import Notify from "./Notify";

function Project({ id, name, goal }) {
    const [currentDonation, setCurrentDonation] = useState(0);
    const [validDonation, setValidDonation] = useState(false);
    const [goalReached, setGoalReached] = useState(false);
    const [remainingAmountNeeded, setRemainingAmountNeeded] = useState(+goal);
    const [showNotify, setShowNotify] = useState(false);

    function handleDonation(value) {
        const donation = Number(value);
        const isValid = !Number.isNaN(donation) && donation > 0 && donation <= remainingAmountNeeded;

        setValidDonation(isValid);

        if (!isValid) {
            return isValid;
        }

        setCurrentDonation(prev => Math.round(prev + donation));

        setRemainingAmountNeeded(prev => {
            const newRemaining = Math.round(prev - donation);
            const normalized = newRemaining < 0 ? 0 : newRemaining;
            setGoalReached(normalized === 0);
            return normalized;
        });

        return isValid;
    }

    function checkSubmitDonation() {
        const donation = +document.querySelector(`[data-id = "${id}"] .input-donation`).value;
        handleDonation(donation);

        setTimeout(() => setShowNotify(true), 200);
    }

    useEffect(() => {
        if (!showNotify) return;

        const id = setTimeout(() => setShowNotify(false), 1500);
        return () => clearTimeout(id);
    }, [showNotify])

    return (<div className='project' data-id={id}>
        <h3 className='project-name'>{name}</h3>
        <span className='goal'>Project goal: ${goal}</span>
        <span className='current-donation'>Amount Raised: ${currentDonation}</span>
        {goalReached ?
            <span className='goal-reached'>Congratulations! Goal Reached!</span>
            :
            <section className='input-container'>
                <input type="number"
                    className='input-donation'
                    placeholder='Insert a valid donation'
                />
                <button className='submit-donation' onClick={checkSubmitDonation}>Submit</button>
            </section>
        }

        <span className='remaining-amount-needed'>Remaining Amount Needed: ${remainingAmountNeeded}</span>
        <Notify display={showNotify} msg={validDonation ? 'Thanks for your support!' : 'Invalid donation!'} />
    </div>)
}

export default Project