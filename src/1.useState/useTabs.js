import { useState } from 'react';

export const useTabs = (initialTab, allTabs) => {
	const [currentIndex, setCurrentIndex] = useState(initialTab);
	if (!allTabs || !Array.isArray(allTabs)) {
		return; // function을 종료시키는 역할
	}
	return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex }; // allTabs를 리턴하면서 currentIndex를 인덱스 값으로 가짐
};

// export default useTabs;
