import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

function ProgramPercentages({ programPercentages }) {
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
      if (value > 0) {
        convertedData.push({ x: `${formatString(key)}`, y: `${value}` });
      }
    }
  })(programPercentages);

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
          style={{ labels: { fontSize: 3, fill: 'darkgray' } }}
          labels={({ datum }) => `${datum.x}: ${(datum.y * 100).toFixed(2)}%`}
          colorScale={[
            '#E4E900',
            '#EEE70A',
            '#E8E513',
            '#E2E31D',
            '#DCE127',
            '#D6DF30',
            '#D0DD3A',
            '#CBDB43',
            '#C5D94D',
            '#BFD757',
            '#B9D560',
            '#B3D36A',
            '#ADD174',
            '#A7CE7D',
            '#A1CC87',
            '#9BCA91',
            '#95C89A',
            '#8FC6A4',
            '#89C4AE',
            '#84C2B7',
            '#7EC0C1',
            '#78BECA',
            '#72BCD4',
            '#6CBADE',
            '#66B8E7',
            '#60B6F1',
          ]}
        />
        <VictoryLabel
          textAnchor='middle'
          style={{ fontSize: 20, fill: 'darkgray' }}
          x={200}
          y={200}
          text='Programs'
        />
      </svg>
    </div>
  );
}

export default ProgramPercentages;
