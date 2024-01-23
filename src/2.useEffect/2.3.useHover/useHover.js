import { useEffect, useRef } from 'react';

const useHover = onHover => {
	if (typeof onHover !== 'function') {
		return;
	}
	const elem = useRef();

	useEffect(() => {
		if (elem.current) {
			elem.current.addEventListener('mouseenter', onHover);
		}
		return () => {
			if (elem.current) {
				elem.current.removeEventListener('mouseenter', onHover);
			}
		};
	}, []);

	return elem;
};

export default useHover;
