import useClick from './useClick';

const ClickExample = () => {
	const sayHello = () => console.log('say hello');
	const title = useClick(sayHello);
	return (
		<>
			<h1 ref={title}>Hi</h1>
		</>
	);
};

export default ClickExample;
