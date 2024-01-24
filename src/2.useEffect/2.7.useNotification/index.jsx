import useNotification from './useNotification';

const NotificationExample = () => {
	const triggerNotif = useNotification('Can I steal your kimchi?', {
		body: "I love kimchi don't you?",
	});
	return (
		<>
			<button onClick={triggerNotif}>Hello</button>
		</>
	);
};

export default NotificationExample;
