'use client';

import TagList from './TagList';

export default function TagListWrapper() {
  return (
    <TagList
      tagList={['All', 'Team', 'Single']}
      onTagClick={(tag) => console.log(tag)}
    />
  );
}
