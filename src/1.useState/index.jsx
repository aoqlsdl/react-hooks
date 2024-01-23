import useInput from './useInput';

const InputExample = () => {
	const maxLen = value => value.length <= 10;
	const name = useInput('Mr. ', maxLen);
	return (
		<>
			<h1>hello</h1>
			<input placeholder="Name" {...name} />
		</>
	);
};

export default InputExample;
