import { useRef } from 'react';

// 유튜브에서 전체화면으로 보기를 누르면 전체화면으로 전환되는 효과를 구현할 때 사용할 수 있을 듯
const useFullScreen = callback => {
	const elem = useRef();

	const runCb = isFull => {
		if (callback && typeof callback === 'function') {
			callback(isFull);
		}
	};

	const triggerFull = () => {
		if (elem.current) {
			if (elem.current.requestFullscreen) {
				elem.current.requestFullscreen();
			} else if (elem.current.mozRequestFullScreen) {
				// firefox
				elem.current.mozRequestFullScreen();
			} else if (elem.current.webkitRequestFullscreen) {
				elem.current.webkitRequestFullscreen();
			} else if (elem.current.msRequestFullscreen) {
				elem.current.msRequestFullscreen();
			}
			runCb(true);
		}
	};

	const exitFull = () => {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			// firefox
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
		runCb(false);
	};

	return { elem, triggerFull, exitFull };
};

export default useFullScreen;
