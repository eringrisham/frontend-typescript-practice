import React from 'react';
import { StudentDiv, CircleDiv, TextDiv, NameSpan, FactsSpan } from './styles.css';

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
	};
	key: number;
}

export interface ImageProps {
	pic: any;
}

export const StudentContainer: React.FC<StudentContainerProps> = ({student}) => {

	const findAverageGrade = (grades:[]) => {
    let total = 0;
		grades.forEach(grade => total += Number(grade));
		return total/(student.grades.length);
	}

	const average:Number = findAverageGrade(student.grades);

	const fullName:String = (student.firstName).toUpperCase() + ' ' + (student.lastName).toUpperCase();

	return (
		<StudentDiv>
			<CircleDiv pic={student.pic}/>

      <TextDiv>
				<NameSpan>
					{fullName}
				</NameSpan>
				<FactsSpan>
					Email: {student.email}
					<br/>
					Company: {student.company}
					<br/>
					Skill: {student.skill}
					<br/>
					Average: {average}%
				</FactsSpan>
			</TextDiv>
		</StudentDiv>
	)
}