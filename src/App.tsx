import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StudentContainer } from './Student';
import { SearchBar } from './SearchBar';
import { TagSearchBar } from './TagSearch'
import { ScrollArrow } from './ScrollToTop';
import { StudentsContainer, HorizontalLine, NoStudentsSpan } from './styles.css';

const App: React.FC = () => {

  const [studentData, setStudentData] = useState([]);

  const [nameSearchInput, setNameSearchInput] = useState('');

  const [tagSearchInput, setTagSearchInput] = useState('');

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

    const studentDataWithTags = studentData.map((student: {fullName: string; tags: string[]}):{} => {
      if (student.fullName === studentName) {
        student.tags = tags;
      }
      return student;
    })
    setStudentData(studentDataWithTags as []);
  }

  const filteredStudents = studentData.filter((student: { fullName: string; tags: string[]}):{} => {

    student.fullName = student.fullName.toLowerCase();

    if (!tagSearchInput) {
      return student.fullName.includes(nameSearchInput);
    } else {
      return student.fullName.includes(nameSearchInput)
      && student.tags.join(' ').includes(tagSearchInput);
    }
  });

  return (
    <>
      {filteredStudents.length === 0
        ? <NoStudentsSpan>
            No students matching your search criteria
          </NoStudentsSpan>
        : null}
      <SearchBar
        searchStudentsByName={searchStudentsByName}/>
      <HorizontalLine/>
      <TagSearchBar
        searchStudentsByTag={searchStudentsByTag}/>
      <HorizontalLine/>
      <StudentsContainer>
        {filteredStudents.map((student, i) => (
          <StudentContainer
            getTagsPerStudent={getTagsPerStudent}
            student={student}
            key={i}/>
        ))}
        {filteredStudents.length === 0 ? null : <ScrollArrow/>}
      </StudentsContainer>
    </>
  );
}

export default App;
