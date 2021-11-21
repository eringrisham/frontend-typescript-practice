import React from 'react';
import { SearchBarDiv, SearchBarInput } from './styles.css';

interface SearchBarProps {
	searchStudentsByName: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchStudentsByName }) => (
	<SearchBarDiv>
		<form>
			<SearchBarInput
				onChange={e => searchStudentsByName(e)}
				type='text'
				placeholder='Search by name'/>
		</form>
	</SearchBarDiv>
)
