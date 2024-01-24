import { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
	useEffect(() => {
		if (typeof duration !== 'number' || typeof delay !== 'number') return;
	});
	const elem = useRef();
	useEffect(() => {
		if (elem.current) {
			const { current } = elem;
			current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
			current.style.opacity = 1;
		}
	});
	return { ref: elem, style: { opacity: 0 } };
};

export default useFadeIn;
