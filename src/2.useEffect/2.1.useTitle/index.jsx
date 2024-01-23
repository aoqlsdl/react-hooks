import useTitle from './useTitle';

const TitleExample = () => {
	const titleUpdater = useTitle('Loading...');
	setTimeout(() => titleUpdater('Home'), 5000);
	return (
		<>
			<div>Hi</div>
		</>
	);
};

export default TitleExample;
