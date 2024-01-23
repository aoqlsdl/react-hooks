import { useEffect } from 'react';

const useBeforeLeave = onBefore => {
	const handle = e => {
		const { clientY } = e;
		// 마우스가 위로 벗어날 때만 실행
		if (clientY <= 0) {
			onBefore();
		}
	};
	useEffect(() => {
		if (typeof onBefore !== 'function') return; // 이걸 useEffect 밖에서 쓰면 Hook 'useEffect' is called conditionally라는 오류가 발생함
		document.addEventListener('mouseleave', handle);
		return () => document.removeEventListener('mouseleave', handle);
	}, []);
};

export default useBeforeLeave;
