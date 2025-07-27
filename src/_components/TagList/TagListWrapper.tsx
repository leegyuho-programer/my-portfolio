'use client';

import { useState } from 'react';
import TagList from './TagList';
import ProjectSectionClient from '../projectSection/ProjectSectionClient';

export default function TagListWrapper() {
  const [selectedTag, setSelectedTag] = useState<'All' | 'Team' | 'Single'>(
    'All'
  );

  return (
    <div className='mx-auto'>
      <TagList
        tagList={['All', 'Team', 'Single']}
        onTagClick={(tag) => setSelectedTag(tag)}
      />
      <ProjectSectionClient selectedTag={selectedTag} />
    </div>
  );
}
