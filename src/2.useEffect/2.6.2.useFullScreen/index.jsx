import useFullScreen from './useFullScreen';

const FullScreenExample = () => {
	const { elem, triggerFull } = useFullScreen();
	return (
		<>
			<img
				img
				src="https://i.ibb.co/R6RwNxx/grape.jpg"
				alt="grape"
				width="250"
				ref={elem}
			/>
			<button onClick={triggerFull}>Make fullcreen</button>
		</>
	);
};

export default FullScreenExample;
