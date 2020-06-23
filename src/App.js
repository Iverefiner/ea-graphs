import React, { useEffect, useState } from 'react';
import './App.css';
import {
  School,
  ProgramPercentagesGraph,
  EthnicityGraph,
  CostGraph,
} from './components/index';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function App() {
  const [schoolData, setSchoolData] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true);
        axios
          .get(
            `https://api.data.gov/ed/collegescorecard/v1/schools?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${API_KEY}`
          )
          .then((res) => {
            const data = res.data.results[0];
            setSchoolData(data);
            setLoading(false);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [API_KEY]);

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
            <div>
            <Button variant='contained' color='primary'>
              Save Data
            </Button>
            <Button variant='contained' color='primary'>
              Save as PDF
            </Button>
            <Button variant='contained' color='primary'>
              Print
            </Button>
            </div>
            <ProgramPercentagesGraph
              programPercentages={
                schoolData.latest.academics.program_percentage
              }
            />
            <EthnicityGraph
              ethnicity={schoolData.latest.student.demographics.race_ethnicity}
            />
            <CostGraph
              cost={schoolData.latest.cost.net_price.public.by_income_level}
            />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
