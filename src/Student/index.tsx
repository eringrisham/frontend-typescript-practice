import React, { useState } from 'react';
import { StudentDiv, CircleDiv, TextDiv, NameSpan, FactsSpan, GradesButton, HorizontalLine } from './styles.css';
import { Grades } from '../GradesView';

interface StudentContainerProps {
	student: {
		city: string;
		company: string;
		email: string;
		firstName: string;
		grades: [];
		id: string;
		lastName: string;
		pic: string;
		skill: string;
		fullName: string;
	};
	key: number;
}

export interface ImageProps {
	pic: any;
}

export const StudentContainer: React.FC<StudentContainerProps> = ({student}) => {

	const { fullName, email, company, skill, pic, grades } = student;

	const fullNameUpperCase = fullName.toUpperCase();

	const [gradesView, setGradesView] = useState(false);

	const findAverageGrade = (grades:[]) => {
    let total = 0;
		grades.forEach(grade => total += Number(grade));
		return total/(grades.length);
	}

	const average:Number = findAverageGrade(grades);

	return (
		<>
		<StudentDiv>
			<CircleDiv pic={pic}/>
      <TextDiv>
				<NameSpan>
					{fullNameUpperCase}
				</NameSpan>
				<FactsSpan>
					Email: {email}
					<br/>
					Company: {company}
					<br/>
					Skill: {skill}
					<br/>
					Average: {average}%
				</FactsSpan>
			</TextDiv>
			<GradesButton
			onClick={() => setGradesView(!gradesView)} >
				{gradesView ? '-' : '+'}
			</GradesButton>
		</StudentDiv>
		{gradesView ? <Grades grades={grades}/> : null}
		<HorizontalLine/>
		</>
	)
}