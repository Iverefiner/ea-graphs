import React, { useEffect, useState } from 'react';
import './App.css';
import Graphs from './components/Graphs'
import axios from 'axios';
import { VictoryPie } from 'victory';

function App() {
  const [schoolData, setSchoolData] = useState(null);

  useEffect(() => {
    try{
      axios
        .get(
          `https://api.data.gov/ed/collegescorecard/v1/schools?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          const data = res.data;
          setSchoolData(data.results[0]);
        });
    }catch(err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
      <h1>School Data</h1>
      </header>
      <Graphs schoolData={schoolData}/>
    </div>
  );
}

export default App;
