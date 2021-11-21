import React from 'react';
import { GradesDiv } from './styles.css';

interface GradesProps {
	grades: [];
}

export const Grades: React.FC<GradesProps> = ({ grades }) => (
	<GradesDiv>
		{grades.map((grade, i) => (
			<div
				key={i}>
				Test {i + 1}: {grade}%
			</div>
		))}
	</GradesDiv>
)