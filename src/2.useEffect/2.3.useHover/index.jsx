import useConfirm from './useConfirm';
import usePreventLeave from './usePreventLeave';

const HoverExample = () => {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<>
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>Unprotect</button>
		</>
	);
};

export default HoverExample;
