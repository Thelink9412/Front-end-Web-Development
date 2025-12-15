import styled from 'styled-components';
import destinations from './destinationsList';
import { useParams } from 'react-router-dom';

const DetailContainer = styled.div`
max-width: 600px;
margin: auto;
`;

const DetailImage = styled.img`
width: 100%;
height: auto;
border-radius: 8px;
margin-bottom: 20px;
`;

const DetailButton = styled.button`
background: #3498db;
color: #fff;
border: none;
padding: 10px;
border-radius: 4px;
cursor: pointer;
`;

const DestinationDetail = () => {
    const { id } = useParams();
    const destinationId = parseInt(id, 10);
    const destination =
        destinations.find(
            dest =>
                dest.id === destinationId
        );

    if (!destination) {
        return <div style={
            {
                textAlign: 'center'
            }}>
            Destination not found
        </div>;
    }

    return (
        <DetailContainer>
            <h2>{destination.name}</h2>
            <DetailImage src={destination.img}
                alt={destination.name} />
            <p>{destination.briefDescription}</p>
            <p><b>Rating:</b><br />
                {destination.rating || 'Not available'}
            </p>
            <p>
                <b>Best time to visit:</b><br />
                {destination.bestTimeToVisit || 'Not specified'}
            </p>
            <DetailButton>Book Now</DetailButton>
        </DetailContainer>
    );
};
export default DestinationDetail;