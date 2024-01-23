import { useEffect, useState } from 'react';

const TitleExample = () => {
	const [num, setNum] = useState(0);
	const [aNum, setANum] = useState(0);

	const sayHello = () => console.log('hello');
	useEffect(() => {
		sayHello();
	}, [num]);

	return (
		<>
			<div>Hi</div>
			<button onClick={() => setNum(num + 1)}>{num}</button>
			<button onClick={() => setANum(aNum + 1)}>{aNum}</button>
		</>
	);
};

export default TitleExample;
