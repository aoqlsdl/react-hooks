import useFullScreen from './useFullScreen';

const FullScreenExample = () => {
	const onFullS = isFull => {
		console.log(isFull ? 'We are full' : 'We are small');
	};
	const { elem, triggerFull, exitFull } = useFullScreen(onFullS);
	return (
		<>
			<div ref={elem}>
				<img
					img
					src="https://i.ibb.co/R6RwNxx/grape.jpg"
					alt="grape"
					width="250"
				/>
				<button onClick={exitFull}>Exit fullcreen</button>
				<button onClick={triggerFull}>Make fullcreen</button>
			</div>
		</>
	);
};

export default FullScreenExample;
