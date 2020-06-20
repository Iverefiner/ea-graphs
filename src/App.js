import React, { useEffect, useState } from 'react';
import './App.css';
import { School, ProgramPercentages, Ethnicity } from './components/index';
import axios from 'axios';

function App() {
  const [schoolData, setSchoolData] = useState(null);
  const [loading, setLoading] = useState(false);
  const YOUR_API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(
          `https://api.data.gov/ed/collegescorecard/v1/schools?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${YOUR_API_KEY}`
        )
        .then((res) => {
          const data = res.data.results[0];
          setSchoolData(data);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  }, [YOUR_API_KEY]);

  return (
    <div className='App'>
      <header className='App-header'>
        {loading && <p>Loading...</p>}
        {schoolData && (
          <>
            <School
              school={schoolData.school}
              totalStudents={
                schoolData.latest.student.enrollment.undergrad_12_month +
                schoolData.latest.student.enrollment.grad_12_month
              }
            />
            <ProgramPercentages
              programPercentages={schoolData.latest.academics.program_percentage}
            />
            <Ethnicity
              ethnicity={schoolData.latest.student.demographics.race_ethnicity}
            />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
