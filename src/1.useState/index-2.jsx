import { useTabs } from './useTabs';

const content = [
	{
		tab: 'Section 1',
		content: "I'm the content of the Section 1",
	},
	{
		tab: 'Section 2',
		content: "I'm the content of the Section 2",
	},
];

const TabExample = () => {
	const { currentItem, changeItem } = useTabs(0, content);
	return (
		<>
			{content.map((section, index) => (
				<button key={section.tab} onClick={() => changeItem(index)}>
					{section.tab}
				</button>
			))}
			<div>{currentItem.content}</div>
		</>
	);
};

export default TabExample;
