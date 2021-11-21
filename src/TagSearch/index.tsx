import React from 'react';
import { SearchBarDiv, SearchBarInput } from '../SearchBar/styles.css';

interface TagSearchBarProps {
	searchStudentsByTag: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const TagSearchBar: React.FC<TagSearchBarProps> = ({ searchStudentsByTag }) => (
	<SearchBarDiv>
		<form>
			<SearchBarInput
				onChange={e => searchStudentsByTag(e)}
				type='text'
				placeholder='Search by tag'/>
		</form>
	</SearchBarDiv>
)
