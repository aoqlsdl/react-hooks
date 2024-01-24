import { useState, useEffect } from 'react';

const useNetwork = onChange => {
	const [status, setStatus] = useState(navigator.onLine); // navigator.onLine: navitaor가 online인지 offline인지 알려줌

	const handleChange = () => {
		if (typeof onChange === 'function') {
			onChange(navigator.onLine);
		}
		setStatus(navigator.onLine);
	};

	useEffect(() => {
		window.addEventListener('online', handleChange);
		window.addEventListener('offline', handleChange);
		return () => {
			// cleanup 함수라고 부름
			window.removeEventListener('online', handleChange);
			window.removeEventListener('offline', handleChange);
		};
	}, []);

	return status;
};

export default useNetwork;
