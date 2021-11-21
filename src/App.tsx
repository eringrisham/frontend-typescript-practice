import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StudentContainer } from './Student';
import { SearchBar } from './SearchBar';
import { TagSearchBar } from './TagSearch'
import { StudentsContainer, HorizontalLine } from './styles.css';

const App: React.FC = () => {

  const [studentData, setStudentData] = useState([]);

  const [nameSearchInput, setNameSearchInput] = useState('');

  const [tagSearchInput, setTagSearchInput] = useState('');

  //const [tags, setTags] = useState(['']);

	// const [tagTerm, setTagTerm] = useState('');

  useEffect(() => {

    axios.get(`https://api.hatchways.io/assessment/students`)
    .then(({data: studentData}) => {

      const { students } = studentData;
      return students;

    })
    .then(students => {
      const studentDataWithFullName = students.map((student: { fullName: string; firstName: string; lastName: string; tags: string[]}):{} => {
        student.tags = [];
        student.fullName = student.firstName + ' ' + student.lastName;
        return student;

      })
      setStudentData(studentDataWithFullName);
    })

  }, []);

  const searchStudentsByName = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = (e.target as HTMLTextAreaElement).value.toLowerCase();
    setNameSearchInput(name);
  }

  const searchStudentsByTag = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newTag = (e.target as HTMLTextAreaElement).value.toLowerCase();
    setTagSearchInput(newTag);
  }

  const getTagsPerStudent = (tags:string[], studentName:string) => {
    //setTags(tags);

    const studentDataWithTags = studentData.map((student: {fullName: string; tags: string[]}):{} => {
      if (student.fullName === studentName) {
        student.tags = tags;
      }
      return student;
    })

    setStudentData(studentDataWithTags as []);
  }

  // const addTag = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
  //   const updatedTags = [...tags, tagTerm];
  //   setTags(updatedTags);
	// 	setTagTerm('');
  // }

	// const updateTagTerm = (e: React.FormEvent<HTMLInputElement>) => {
	// 	e.preventDefault();
	// 	const term = (e.target as HTMLTextAreaElement).value;
	// 	setTagTerm(term);
	// }

  return (
    <>
    <SearchBar searchStudentsByName={searchStudentsByName}/>
    <HorizontalLine/>
    <TagSearchBar searchStudentsByTag={searchStudentsByTag}/>
    <HorizontalLine/>
    <StudentsContainer>
      {studentData.filter((student: { fullName: string}):{} => {
        student.fullName = student.fullName.toLowerCase();
        return student.fullName.includes(nameSearchInput);
      }).map((student, i) => (
        <StudentContainer
        getTagsPerStudent={getTagsPerStudent}
        // tagTerm={tagTerm} addTag={addTag} updateTagTerm={updateTagTerm} tags={tags}
         student={student} key={i}
        />
      ))}
    </StudentsContainer>
    </>
  );
}

export default App;
