import useFadeIn from './useFadeIn';

const FadeInExample = () => {
	const fadeInH1 = useFadeIn(1, 2);
	const fadeInP = useFadeIn(5, 10);
	return (
		<>
			<h1 {...fadeInH1}>Hello</h1>
			<p {...fadeInP}>로렘입숨</p>
		</>
	);
};

export default FadeInExample;
