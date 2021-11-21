import styled from 'styled-components';

export const StudentsContainer = styled.div`
  font-family: 'Raleway', sans-serif;
	cursor: default;
	display: flex;
	flex-direction: column;
`

export const HorizontalLine = styled.hr`
  border: 1px lightGray solid;
	width: 98%;
`

export const NoStudentsSpan = styled.span`
	left: 20px;
	top: 200px;
	position: fixed;
	text-wrap: nowrap;
	font-size: 40px;
	color: darkRed;
`
