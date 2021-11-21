import React from 'react';
import { TagInput } from '../TagsInput';
import { TagsDiv, TagSpan } from './styles.css';

interface TagProps {
  addTag: (e: React.FormEvent<HTMLFormElement>, name:string) => void;
	updateTagTerm: (e: React.FormEvent<HTMLInputElement>) => void;
	tags: string[];
	tagTerm: string;
	name: string;
}

export const Tags: React.FC<TagProps> = ({ name, addTag, tags, updateTagTerm, tagTerm }) => (
	<>
	<TagsDiv>
		{tags.filter(tag => (
			tag.length
		)).map((tag, i) => (
			<TagSpan
				key={i}>
				{tag}
			</TagSpan>
		))}
	</TagsDiv>
	<TagInput
		name={name}
		tagTerm={tagTerm}
		updateTagTerm={updateTagTerm}
		addTag={addTag}/>
	</>
)