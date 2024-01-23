const usePreventLeave = () => {
	const listener = e => {
		e.preventDefault();
		e.returnValue = ''; // Chrome에서는 returnValue를 설정해줘야 함
	};
	const enablePrevent = () => window.addEventListener('beforeunload', listener); // beforeunload: window가 닫히기 전에 function이 실행되는 것을 허락함
	const disablePrevent = () =>
		window.removeEventListener('beforeunload', listener);

	return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
