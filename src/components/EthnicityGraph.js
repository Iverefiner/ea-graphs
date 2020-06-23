import React from 'react';
import { VictoryPie, VictoryLabel, VictoryLegend, VictoryChart } from 'victory';

function EthnicityGraph({ ethnicity }) {
  const convertedData = [];
  const legendData = [];

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
        convertedData.push({ x: `${formatString(key)}`, y: value });
        legendData.push({ name: `${formatString(key)}: ${(value * 100).toFixed(2)}%` });
      }
    }
  })(ethnicity);

  return (
    <div>
      <svg viewBox='0 0 400 400'>
        <VictoryLegend
          standalone={false}
          colorScale={[
            '#fa2d3e',
            '#112cb7',
            '#6e4e09',
            '#a3fad4',
            '#dd7620',
            '#8545E5',
            '#e6b900',
            '#34650c',
            '#3D85DD',
          ]}
          x={5}
          y={40}
          gutter={20}
          title='Legend'
          centerTitle
          style={{
            title: {fill: 'darkgray'},
            labels: { fontSize: 4, fill: 'darkgray' },
          }}
          data={legendData}
        />
        <VictoryPie
          origin={{ x: 200, y: 200 }}
          standalone={false}
          width={400}
          height={400}
          data={convertedData}
          innerRadius={68}
          labelRadius={160}
          style={{ labels: { fontSize: 4, fill: 'darkgray' } }}
          labels={({ datum }) => `${(datum.y * 100).toFixed(2)}%`}
          colorScale={[
            '#fa2d3e',
            '#112cb7',
            '#6e4e09',
            '#a3fad4',
            '#dd7620',
            '#8545E5',
            '#e6b900',
            '#34650c',
            '#3D85DD',
          ]}
          padAngle={({ datum }) => datum.y * 10}
          cornerRadius={({ datum }) => datum.y * 5}
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
