import React from 'react'
import { VictoryPie } from 'victory';

function ProgramPercentages({programPercentages}) {
const convertedData = [];

for (let [key, value] of Object.entries(programPercentages)) {
  convertedData.push({x:`${key}`, y:`${value}`});
}

console.log(convertedData)
  return (
    <div>
      <VictoryPie
        data={convertedData}
      />
    </div>
  );
}

export default ProgramPercentages

