import { useState } from 'react';
import TagButton from '../TagButton/TagButton';

interface TagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

export default function TagList<T extends string>({
  tagList,
  onTagClick,
}: TagListProps<T>) {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);

  return (
    <div
      className='flex bg-lightGray rounded-b-primary-button gap-2 px-4 py-3'
      onClick={(event) => {
        const eventTarget = event.target as HTMLButtonElement;
        // 이벤트 핸들러를 div에 달긴 하지만 실제로 이벤트를 발생시키는 건 TagButton이라는 뜻
        const tag = eventTarget.textContent as T;
        onTagClick(tag);
        // TagButton의 children으로 있는 tag를 받아와서 onTagClick에 넘겨준다.
      }}
    >
      {/* 
      onTagClick은 TagButton이 클릭될 때마다 발생하지만 
      TagButton의 이벤트라기 보다 TagList의 이벤트이다.
      따라서 onTagClick을 div 엘리먼트에서 발생하게 했다.

      onTagClick은 tag를 파라미터로 받는 함수인데 div에서는 어떤 tag가 클릭되었는지 알 수 없다.
      왜냐하면 클릭되는 tag는 TagButton이 알고 있기 때문이다.
      따라서 이벤트 버블링을 활용 
      */}
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
