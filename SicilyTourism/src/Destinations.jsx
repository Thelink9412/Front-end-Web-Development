import { useEffect, useState } from "react"
import destinations from "./destinationsList"
import { Link } from 'react-router-dom'

function Destinations() {
    const [animateList, setAnimateList] = useState(true)
    
    useEffect(() => {
        setAnimateList(true);

        return () => setAnimateList(false)
    })

    return (<div className={`destinations-list ${animateList ? 'animate' : ''}`}>
        {destinations.map((dest) => {
            return (<div className='single-destination-preview' key={dest.id}>
                <Link to={`/destinations/${dest.id}`}><img src={dest.img} alt={`Destination n°${dest.id}`} className='preview-img' /></Link>
                <h3 className='destination-name'>{dest.name}</h3>
                <b>Rating</b> {dest.rating}<br />
                <b>Best Time to Visit</b> {dest.bestTimeToVisit}
            </div>)
        })}
    </div>)
}

export default Destinations