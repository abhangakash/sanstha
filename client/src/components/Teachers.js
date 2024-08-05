import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Teachers.css';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/teachers');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teacher profiles:', error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="teachers-container">
      <h1>Our Teachers</h1>
      <div className="teacher-profiles">
        {teachers.map((teacher) => (
          <div key={teacher._id} className="teacher-card">
            <img src={teacher.photo} alt={`${teacher.name}'s profile`} className="teacher-photo" />
            <h2>{teacher.name}</h2>
            <p><strong>Subject:</strong> {teacher.subject}</p>
            <p>{teacher.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
