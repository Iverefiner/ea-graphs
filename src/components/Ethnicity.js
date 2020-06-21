import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory';

function Ethnicity({ethnicity}) {
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
        style={{ labels: { fontSize: 5, fill: 'darkgray' } }}
        colorScale={[
          '#61F4DE',
          '#63DFE4',
          '#65CBE9',
          '#68B6EF',
          '#6AA1F4',
          '#6AA1F4',
          '#6C8DFA',
          '#6E78FF',
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

export default Ethnicity

