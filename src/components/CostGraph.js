import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

function CostGraph({ cost }) {
  const convertedData = [];

  // push into array
  for (let [key, value] of Object.entries(cost)) {
    if (value) {
      convertedData.push({ x: `${key}`, y: `${value.toLocaleString('en')}` });
    }
  }

  console.log(convertedData);
  return (
    <div className='graph'>
      <svg viewBox='0 0 400 400'>
        <VictoryPie
          standalone={false}
          width={400}
          height={400}
          data={convertedData}
          innerRadius={68}
          labelRadius={165}
          style={{ labels: { fontSize: 4, fill: 'darkgray' } }}
          labels={({ datum }) => `${datum.x}: $${datum.y}`}
          colorScale={[
            '#7C65A9',
            '#8075AE',
            '#8385B2',
            '#8795B7',
            '#8BA4BC',
            '#8FB4C1',
            '#92C4C5',
            '#96D4CA',
          ]}
        />
        <VictoryLabel
          textAnchor='middle'
          style={{ fontSize: 20, fill: 'darkgray' }}
          x={200}
          y={200}
          text='Cost by Income'
        />
      </svg>
    </div>
  );
}

export default CostGraph;
