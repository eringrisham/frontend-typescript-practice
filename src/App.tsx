import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StudentContainer } from './Student';
import { SearchBar } from './SearchBar';
import { StudentsContainer } from './styles.css';

const App: React.FC = () => {

  const [studentData, setStudentData] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {

    axios.get(`https://api.hatchways.io/assessment/students`)
    .then(({data: studentData}) => {
      setStudentData(studentData.students);
    })

  }, []);

  const FIXME = 'fixme';




  return (
    <>
    <SearchBar name={FIXME}/>
    <StudentsContainer>
      {studentData.map((student, i) => (
        <StudentContainer student={student} key={i}/>
      ))}
    </StudentsContainer>
    </>
  );
}

export default App;
