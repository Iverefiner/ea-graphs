import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory';

function EthnicityGraph({ethnicity}) {
const convertedData = [];

  // make data strings look pretty
  (function formatData(data) {
    // to get rid of underscore and capitalize all letters
    function formatString(originalString) {
      let splitString = originalString.split('_');
      return splitString.join(' ').toUpperCase();
    }
    // push into array
    for (let [key, value] of Object.entries(data)) {
      if (value) {
        convertedData.push({ x: `${formatString(key)}`, y: `${value}` });
      }
    }
  })(ethnicity);

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
        labelRadius={160}
        style={{ labels: { fontSize: 4, fill: 'darkgray' } }}
        labels={({ datum }) => `${datum.x}: ${(datum.y * 100).toFixed(2)}%`}
        colorScale={[
          '#FCB0F3',
          '#E49BF0',
          '#CC85EE',
          '#B470EB',
          '#9D5BE8',
          '#8545E5',
          '#6D30E3',
          '#551AE0',
          '#3D05DD',
        ]}
      />
      <VictoryLabel
        textAnchor='middle'
        style={{ fontSize: 20, fill: 'darkgray' }}
        x={200}
        y={200}
        text='Ethnicity'
      />
    </svg>
  </div>
);
}

export default EthnicityGraph;

