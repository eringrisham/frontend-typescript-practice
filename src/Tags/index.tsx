import React from 'react';
import { TagInput } from '../TagsInput';
import { TagsDiv, TagSpan } from './styles.css';

interface TagProps {
  addTag: (e: React.FormEvent<HTMLFormElement>) => void;
	updateTagTerm: (e: React.FormEvent<HTMLInputElement>) => void;
	tags: string[];
	tagTerm: string;
}

export const Tags: React.FC<TagProps> = ({ addTag, tags, updateTagTerm, tagTerm }) => {

	return (
		<>
		<TagsDiv>
		  {tags.map((tag, i) => (
				<TagSpan key={i}>
					{tag}
				</TagSpan>
		  ))}
		</TagsDiv>
		<TagInput tagTerm={tagTerm} updateTagTerm={updateTagTerm} addTag={addTag}/>
		</>
	)
}