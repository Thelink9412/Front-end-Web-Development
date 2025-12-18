import birdImg from "./assets/Bird.gif";

const Bird = ({ birdPosition }) => {
	return (
		<img
			src={birdImg}
			alt="bird"
			className="bird"
			style={{
				left: birdPosition.x,
				top: birdPosition.y,
			}}
			draggable={true}
		/>
	);
};

export default Bird;