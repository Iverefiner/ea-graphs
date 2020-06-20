import React from 'react';

function School({ school, totalStudents }) {
  return (
    <div>
      <h3>{school.name}</h3>
      <a href={school.school_url}>website</a>
      <p>{school.city}, {school.state} {school.zip}</p>
      <p>{totalStudents} students enrolled</p>
    </div>
  );
}

export default School;
