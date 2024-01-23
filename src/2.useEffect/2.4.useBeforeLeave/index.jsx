import { useEffect } from 'react';
import useBeforeLeave from './useBeforeLeave';

const LeaveExample = () => {
	const begForLife = () => console.log('Please dont leave');
	useBeforeLeave(begForLife);
	return (
		<>
			<h1>Hello</h1>
		</>
	);
};

export default LeaveExample;
