import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { VictoryPie } from 'victory';

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
          const data = res.data.results[0].school;
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
        {!schoolData ? <p>Loading...</p> : <h1>{schoolData.name}</h1>}
      </header>
    </div>
  );
}

export default App;
