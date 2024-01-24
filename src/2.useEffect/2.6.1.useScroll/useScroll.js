import { useEffect, useState } from 'react';

// 애플 홈페이지에서 스크롤을 내릴 때 fadeIn, fadeOut되는 효과를 구현할 때 사용할 수 있을 듯(useFadeIn과 함께 사용하는 실습을 해봐도 좋을듯)
const useScroll = () => {
	const [state, setState] = useState({ x: 0, y: 0 });
	const onScroll = e => {
		setState({ y: window.scrollY, x: window.scrollX });
	};
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});
	return state;
};

export default useScroll;
