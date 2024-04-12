import { useState } from 'react';

/**
 * 각 탭의 내용을 나타내는 타입 정의.
 * @typedef {Object} TabContent
 * @property {string} tab - 탭의 이름 또는 제목.
 * @property {string} content - 탭과 관련된 내용.
 */

/**
 * 탭 기능을 관리하는 커스텀 훅.
 * @param {number} initialTab - 초기 선택된 탭의 인덱스.
 * @param {TabContent[]} allTabs - 각 탭과 해당 내용을 나타내는 객체의 배열.
 * @returns {Object} 현재 선택된 탭과 선택된 탭을 변경하는 함수를 포함하는 객체.
 */

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  // 입력값 검증
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    /**
     * 현재 선택된 탭을 나타냅니다.
     * @type {TabContent}
     */
    currentItem: allTabs[currentIndex],

    /**
     * 현재 선택된 탭을 변경하는 함수입니다.
     * @type {Function}
     */
    changeItem: setCurrentIndex,
  };
};


const useTabCom = () => {
  const { currentItem, changeItem } = useTabs(1, content);

  return (
    <div>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default useTabCom;
