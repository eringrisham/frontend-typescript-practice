import React, { useState } from 'react';
import { StudentDiv, CircleDiv, TextDiv, NameSpan, FactsSpan, GradesButton, HorizontalLine } from './styles.css';
import { Grades } from '../GradesView';
import { Tags } from '../Tags';

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
		tags: string[];
	};
	key: number;
	getTagsPerStudent: (tags:string[], studentName:string) => void;
	// tags: string[];
	// tagTerm: string;
	// addTag: (e: React.FormEvent<HTMLFormElement>) => void;
	// updateTagTerm: (e: React.FormEvent<HTMLInputElement>) => void;
}

const sampleTags = ['tag1', 'tag2', 'tag3'];
export interface ImageProps {
	pic: any;
}

//***********might need to lift tag state to app */

export const StudentContainer: React.FC<StudentContainerProps> = ({student, getTagsPerStudent
	// tags, addTag, updateTagTerm, tagTerm
}) => {

	const { fullName, email, company, skill, pic, grades } = student;

	const fullNameUpperCase = fullName.toUpperCase();

	const [gradesView, setGradesView] = useState(false);

	const [tags, setTags] = useState(['']);

	const [tagTerm, setTagTerm] = useState('');

	const findAverageGrade = (grades:[]) => {
    let total = 0;
		grades.forEach(grade => total += Number(grade));
		return total/(grades.length);
	}

	const average:Number = findAverageGrade(grades);

	const addTag = (e: React.FormEvent<HTMLFormElement>, name:string) => {
		e.preventDefault();
    const updatedTags = [...tags, tagTerm];
    setTags(updatedTags);
		setTagTerm('');
		student.tags = updatedTags;
		getTagsPerStudent(updatedTags, name);
  }

	const updateTagTerm = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		const term = (e.target as HTMLTextAreaElement).value;
		setTagTerm(term);
	}

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


		<Tags name={student.fullName} getTagsPerStudent={getTagsPerStudent} tags={student.tags} tagTerm={tagTerm} updateTagTerm={updateTagTerm} addTag={addTag}/>


		<HorizontalLine/>
		</>
	)
}