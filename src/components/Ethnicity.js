import React from 'react'
import { VictoryPie } from 'victory';

function Ethnicity({ethnicity}) {
const convertedData = [];

for (let [key, value] of Object.entries(ethnicity)) {
  convertedData.push({ x: `${key}`, y: `${value}` });
}

console.log(convertedData);
return (
  <div>
    <VictoryPie data={convertedData} />
  </div>
);
}

export default Ethnicity

