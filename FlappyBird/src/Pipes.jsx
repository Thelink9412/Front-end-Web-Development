import pipeImg from "./assets/Pipe.png";

const Pipes = ({ pipePosition }) => {
	return (
		<img
			src={pipeImg}
			alt="pipe"
			className="pipe"
			style={{
				left: pipePosition.x,
				top: pipePosition.y,
			}}
			draggable={true}
		/>
	);
};

export default Pipes;