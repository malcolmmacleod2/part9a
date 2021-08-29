import React from 'react';
import Header from './Header';
import Course from './Content';
import Total from './Total';
const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      
      <Header name={courseName}></Header>
      <Course course={courseParts[0]}></Course>
      <Course course={courseParts[1]}></Course>
      <Course course={courseParts[2]}></Course>
      <Total courses={courseParts}></Total>
    </div>
  );
};

export default App;