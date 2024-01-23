import useInput from './useInput';

const InputExample = () => {
	const name = useInput('Mr. ');
	return (
		<>
			<h1>hello</h1>
			<input placeholder="Name" {...name} />
		</>
	);
};

export default InputExample;
