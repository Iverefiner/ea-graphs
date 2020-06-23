import React from 'react';
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from 'victory';

function CostGraph({ cost }) {
  const convertedData = [];

  // convert values to array of objects
  for (let [key, value] of Object.entries(cost)) {
    if (value) {
      convertedData.push({ income: `$${key}`, cost: value });
    }
  }

  console.log(convertedData.sort());

  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        padding={{ left: 140, right: 50, top: 50, bottom: 60 }}
        width={1000}
      >
        <VictoryLabel
          textAnchor='middle'
          style={{ fontSize: 30, fill: 'darkgray' }}
          x={500}
          y={10}
          text='Cost by Income Level'
        />
        <VictoryAxis />
        <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} tickCount={10}/>
        <VictoryBar
          horizontal
          data={convertedData}
          x='income'
          y='cost'
          sortOrder='ascending'
          sortKey='y'
        />
      </VictoryChart>
    </div>
  );
}

export default CostGraph;
