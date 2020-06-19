import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import { VictoryPie } from 'victory';



function App() {
  const [schoolData, setSchoolData] = useState(null)

  useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }[])
  return (
    <div className="App">
      <header className="App-header">
      <h1>University of Wisconsin-Madison Data</h1>
      </header>
    </div>
  );
}

export default App;
