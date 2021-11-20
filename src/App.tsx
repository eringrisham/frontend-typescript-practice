import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StudentContainer } from './Student';
import { SearchBar } from './SearchBar';
import { StudentsContainer, HorizontalLine } from './styles.css';

const App: React.FC = () => {

  const [studentData, setStudentData] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {

    axios.get(`https://api.hatchways.io/assessment/students`)
    .then(({data: studentData}) => {

      const { students } = studentData;
      return students;

    })
    .then(students => {
      const studentDataWithFullName = students.map((student: { fullName: string; firstName: string; lastName: string}):{} => {

        student.fullName = student.firstName + ' ' + student.lastName;
        return student;

      })
      setStudentData(studentDataWithFullName);
    })

  }, []);

  const searchStudentsByName = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = (e.target as HTMLTextAreaElement).value.toLowerCase();
    setSearchInput(name);
  }

  return (
    <>
    <SearchBar searchStudentsByName={searchStudentsByName}/>
    <HorizontalLine/>
    <StudentsContainer>
      {studentData.filter((student: { fullName: string}):{} => {
        student.fullName = student.fullName.toLowerCase();
        return student.fullName.includes(searchInput);
      }).map((student, i) => (
        <StudentContainer student={student} key={i}/>
      ))}
    </StudentsContainer>
    </>
  );
}

export default App;
