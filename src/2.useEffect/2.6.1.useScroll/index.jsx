import useScroll from './useScroll';

const ScrollExample = () => {
	const { y } = useScroll();
	return (
		<div style={{ height: '1000vh' }}>
			<h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>Hi</h1>
		</div>
	);
};

export default ScrollExample;
