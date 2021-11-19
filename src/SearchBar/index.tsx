import React from 'react';
import { SearchBarDiv, SearchBarInput } from './styles.css';

interface SearchBarProps {
	name: string;
}
export const SearchBar: React.FC<SearchBarProps> = ({name}) => {


	return (
		<SearchBarDiv>
      <SearchBarInput placeholder='Search by name'/>
		</SearchBarDiv>
	)
}
