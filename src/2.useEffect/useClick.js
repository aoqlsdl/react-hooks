import { useEffect, useRef } from 'react';

const useClick = onClick => {
	const elem = useRef();
	useEffect(() => {
		if (elem.current) {
			elem.current.addEventListener('click', onClick);
		} // dependency가 없으면 componentDidMount에서만 실행됨 -> component가 unmount되었을 때 eventListener가 실행되지 않게 하기 위해서? 잘 이해 안 됨.
		return () => {
			if (elem.current) {
				elem.current.removeEventListener('click', onClick);
			}
		}; // dependency가 없으면 componentWillUnmount에서만 실행됨
	}, []);
	return elem;
};

export default useClick;
