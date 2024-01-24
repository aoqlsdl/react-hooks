import useNetwork from './useNetwork';

const NetworkExample = () => {
	const handleNetworkChange = online => {
		console.log(online ? 'We just went online' : 'We are offline');
	};
	const onLine = useNetwork(handleNetworkChange); // true or false
	return (
		<>
			<h1>{onLine ? 'Online' : 'Offline'}</h1>
		</>
	);
};

export default NetworkExample;
