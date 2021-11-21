import styled from 'styled-components';
import { ImageProps } from '.';

export const StudentDiv = styled.div`
	padding: 100px;
	display: flex;
	min-height: 160px;
	height: 160px;
	overflow: hidden;
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
  display: flex;
  flex-direction: column;
  padding-left: 50px;
	margin-top: -50px;
	white-space: nowrap;
`

export const NameSpan = styled.div`
  display: flex;
  font-weight: bold;
	font-size: 60px;
`

export const FactsSpan = styled.span`
  display: flex;
  font-size: 40px;
	position: relative;
	left: 40px;
	top: 30px;
`

export const GradesButton = styled.button`
  display: flex;
  color: lightGray;
	border: none;
	cursor: pointer;
  position: absolute;
	left: 1300px;
	font-size: 150px;
	background: none;
	&:hover {
    color: black;
  }
`

export const HorizontalLine = styled.hr`
  border: 1px lightGray solid;
	width: 100%;
`