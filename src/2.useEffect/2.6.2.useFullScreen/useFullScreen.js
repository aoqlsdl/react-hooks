import { useRef } from 'react';

// 유튜브에서 전체화면으로 보기를 누르면 전체화면으로 전환되는 효과를 구현할 때 사용할 수 있을 듯
const useFullScreen = callback => {
	const elem = useRef();
	const triggerFull = () => {
		if (elem.current) {
			elem.current.requestFullscreen();
		}
	};
	return { elem, triggerFull };
};

export default useFullScreen;
