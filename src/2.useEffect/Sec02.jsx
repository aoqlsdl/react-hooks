import { useRef, useEffect } from 'react';

const ClickExample = () => {
	const potato = useRef(null);
	// ref가 mount 되기 전에 실행되므로 potato.current에 optional chaining을 걸어주거나 useEffect를 사용한다.
	useEffect(() => {
		// == getElementById
		setTimeout(() => potato.current.focus(), 5000);
	});
	return (
		<>
			<div>Hi</div>
			<input ref={potato} placeholder="la" />
		</>
	);
};

export default ClickExample;
