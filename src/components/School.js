import React from 'react';

function School({ school, totalStudents }) {
  return (
    <div>
      <h3>{school.name}</h3>
      <a href={`http://${school.school_url}`}>{school.school_url}</a>
      <p>
        {school.city}, {school.state} {school.zip}
      </p>
      <p>{totalStudents.toLocaleString('en')} students enrolled</p>
    </div>
  );
}

export default School;
