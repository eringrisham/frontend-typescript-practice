import styled from 'styled-components';
import { ImageProps } from '.';

export const StudentDiv = styled.div`
  border: 1px lightGray solid;
	padding: 5%;
	display: flex;
	min-height: 250px;
	max-height: 250px;
`

export const CircleDiv = styled.div<ImageProps>`
  border-radius: 50%;
	min-height: 200px;
	max-height: 200px;
	min-width: 200px;
	max-width: 200px;
	border: 1px lightGray solid;
	background-image: url(${props => props.pic});
	background-repeat: no-repeat;
	background-size: 110%;
`

export const TextDiv = styled.div`
  padding-left: 5%;
	margin-top: -4%;
	white-space: nowrap;
`

export const NameSpan = styled.div`
  font-weight: bold;
	font-size: 60px;
`

export const FactsSpan = styled.span`
  color: gray;
  font-size: 40px;
	position: relative;
	left: 50px;
	top: 30px;
`