import React from 'react';
import { AddTagDiv, AddTagInput } from './styles.css';

interface TagInputProps {
  addTag: (e: React.FormEvent<HTMLFormElement>) => void;
	updateTagTerm: (e: React.FormEvent<HTMLInputElement>) => void;
	tagTerm: string;
}

export const TagInput: React.FC<TagInputProps> = ({ addTag, updateTagTerm, tagTerm }) => {

	return (
		<AddTagDiv>
			<form onSubmit={e => addTag(e)}>
				<AddTagInput
					onChange={e => updateTagTerm(e)}
					type='text'
					value={tagTerm}
					placeholder='Add a tag'/>
			</form>
		</AddTagDiv>
	)
}