import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory';

function Ethnicity({ethnicity}) {
const convertedData = [];

  // make data strings look pretty
  (function formatData(data) {
    // to get rid of underscore and capitalize first letters
    function formatString(originalString) {
      let splitString = originalString.split('_');
      for (let i = 0; i < splitString.length; i++) {
        splitString[i] =
          splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
      }
      return splitString.join(' ');
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
        labelRadius={100}
        style={{ labels: { fontSize: 5, fill: 'white' } }}
      />
      <VictoryLabel
        textAnchor='middle'
        style={{ fontSize: 20 }}
        x={200}
        y={200}
        text='Race/Ethnicity'
      />
    </svg>
  </div>
);
}

export default Ethnicity

