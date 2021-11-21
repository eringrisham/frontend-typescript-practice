import React from 'react';
import { AddTagDiv, AddTagInput } from './styles.css';

interface TagInputProps {
  addTag: (e: React.FormEvent<HTMLFormElement>, name:string) => void;
	updateTagTerm: (e: React.FormEvent<HTMLInputElement>) => void;
	tagTerm: string;
	name: string;
}

export const TagInput: React.FC<TagInputProps> = ({ addTag, updateTagTerm, tagTerm, name }) => (
	<AddTagDiv>
		<form onSubmit={e => addTag(e, name)}>
			<AddTagInput
				onChange={e => updateTagTerm(e)}
				type='text'
				value={tagTerm}
				placeholder='Add a tag'/>
		</form>
	</AddTagDiv>
)