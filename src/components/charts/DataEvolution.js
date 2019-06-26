import React from 'react';
// import echarts from 'echarts';
import echarts from './_echarts'


import './DataEvolution.scss';

// const colorAll = [
//   '#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f',
//   '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'
// ];

const COLOR = {
  '0': '#37A2DA',
  '1': '#32C5E9',
  '2': '#67E0E3',
  '3': '#9FE6B8',
  '4': '#FFDB5C',
  '5': '#FF9F7F',
  '6': '#FB7293',
  '7': '#E062AE',
  '8': '#E690D1',
  '9': '#E7BCF3',
  '10': '#9D96F5',
  '11': '#8378EA',
  '12': '#96BFFF',
  '13': 'gray',
  '14': 'red',
}

const H_READ = 'HDFS\nRead';
const QUERY = 'Query';
const ETL = 'ETL';
const H_WRITE = 'HDFS\nWrite';
const G_READ = 'GPU\nRead';
const C_WRITE = 'CPU\nWrite';
const ML_Train = 'ML Train'

export class Hadoop extends React.Component {
  componentDidMount() {
    let hadoopChart = echarts.init(document.querySelector('.hadoop-container'),'light');
    let option = {
      grid: {
        left:0,
        top:0,
        right:0,
        bottom:0,
        containLabel: false,
        show: false,
        height: 65,
      },
      xAxis: [
        {
          type: 'value',
          show: false,
          min: 10,
          max: 400
        }
      ],
      yAxis: [
        {
          type: 'category',
          data: ['周一'],
          show: false
        }
      ],
      series: [
        {
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              name: ' ',
              show: true,
              position: 'inside',
              formatter: "{b}",
              fontSize: 16,
              verticalAlign: 'middle',
              fontWeight: 900,
            }
          },
          barWidth: 75,
          data: [
            {
              name: H_READ,
              itemStyle: { color: COLOR['13'] },
              value: [30]
            },
            {
              name: QUERY,
              label: { fontSize: 32 },
              itemStyle: { color: COLOR['0'] },
              value: [90]
            },
            {
              name: H_WRITE,
              itemStyle: { color: COLOR['13'] },
              value: [30]
            },
            {
              itemStyle: { color: 'white' },
              value: [11]
            },
            {
              name: H_READ,
              itemStyle: { color: COLOR['13'] },
              value: [30]
            },
            {
              itemStyle: { color: 'white' },
              value: [11]
            },
            {
              name:ETL,
              itemStyle: { color: COLOR['5'] },
              label: {fontSize: 36,},
              value: [90]
            },
            {
              itemStyle: { color: COLOR['13'] },
              name: H_WRITE,
              value: [30]
            },
            {
              itemStyle: { color: 'white' },
              value: [11]
            },
            {
              name: H_READ,
              itemStyle: { color: COLOR['13'] },
              value: [30]
            },
            {
              name: ML_Train,
              label: { fontSize: 32, },
              itemStyle: { color: COLOR['14'] },
              value: [90]
            },
          ]
        },
      ]
    };
    hadoopChart.setOption(option);
    window.addEventListener('resize', () => { hadoopChart.resize(); })
  }
  render() {
    return (
      <div className='hadoop-container'></div>
    )
  }
}

export class Spark extends React.Component {
  componentDidMount() {
    let dataChart = echarts.init(document.querySelector('.chart-container','light'));
    let option = {
      grid: {
        left: 0,
        top:0,
        bottom: 0,
        containLabel: false,
        show: false,
        backgroundColor: 'blue',
        height: 65,
      },
      xAxis: [
        {
          type: 'value',
          show: false,
          min: 10,
          max: 400
        }
      ],
      yAxis: [
        {
          type: 'category',
          data: ['周一'],
          show: false
        }
      ],
      series: [
        {
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              name: ' ',
              show: true,
              position: 'inside',
              formatter: "{b}",
              fontSize: 16,
              verticalAlign: 'middle',
              fontWeight: 900,
            }
          },
          barWidth: 75,
          hoverAnimation: true,
          data: [
            {
              name: H_READ,
              itemStyle: { color: COLOR['13'] },
              value: [30]
            },
            {
              name: QUERY,
              label: {
                fontSize: 32,
              },
              itemStyle: { color: COLOR['0'] },
              value: [75]
            },
            {
              name: ETL,
              label: {
                fontSize: 32,
              },
              itemStyle: { color: COLOR['5'] },
              value: [75]
            },
            {
              name: ML_Train,
              label: {
                fontSize: 32,
              },
              itemStyle: { color: COLOR['14'] },
              value: [75]
            },
          ]
        },

      ]
    };
    dataChart.setOption(option);
    window.addEventListener('resize', () => { dataChart.resize(); })
  }
  render() {
    return (
      <div className='chart-container'></div>
    )
  }
}

export class GPUSpark extends React.Component {
  componentDidMount() {
    let GPUSparkChart = echarts.init(document.querySelector('.gpu-spark-container'),'light');
    let option = {
      grid: {
        left:0,
        top:0,
        right:0,
        bottom:0,
        containLabel: false,
        show: false,
        height: 65,
      },
      xAxis: [
        {
          type: 'value',
          min: 10,
          max: 400,
          show: false,
        }
      ],
      yAxis: [
        {
          type: 'category',
          data: ['周一'],
          show: true
        }
      ],
      series: [
        {
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              name: ' ',
              show: true,
              position: 'inside',
              formatter: "{b}",
              fontSize: 16,
              verticalAlign: 'middle',
              fontWeight: 900,
            }
          },
          barWidth: 75,
          data: [
            {
              name: H_READ,
              itemStyle: {
                color: COLOR['13']
              },
              value: [30]
            },
            {
              name: G_READ,
              itemStyle: { color: COLOR['3'] },
              label: {fontSize:10},
              value: [20]
            },
            {
              name: QUERY,
              itemStyle: {
                color: COLOR['0']
              },
              label: {fontSize:10},
              value: [22]
            },
            {
              name: C_WRITE,
              itemStyle: {
                color: COLOR['13']
              },
              label: {fontSize:10},
              value: [20]
            },
            {
              itemStyle: { color: 'white' },
              value: [11]
            },
            {
              name: G_READ,
              label: {fontSize:10},
              itemStyle: {
                color: COLOR['3']
              },
              value: [20]
            },
            {
              name: ETL,
              itemStyle: { color: COLOR['5'] },
              value: [30]
            },
            {
              name: C_WRITE,
              itemStyle: {color: COLOR['13']},
              label: {fontSize:10},
              value: [20]
            },
            {
              itemStyle: { color: 'white' },
              value: [11]
            },
            {
              name: G_READ,
              itemStyle: {color: COLOR['3']},
              label: {fontSize:10},
              value: [20]
            },
            {
              name: 'ML\nTrain',
              itemStyle: { color: COLOR['14'] },
              label: {fontSize:10},
              value: [20]
            },
          ]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    GPUSparkChart.setOption(option);
    window.addEventListener('resize', () => { GPUSparkChart.resize(); })
  }
  render() {
    return (
      <div className='gpu-spark-container'></div>
    )
  }
}

export class Rapids extends React.Component {
  componentDidMount() {
    let dataChart = echarts.init(document.querySelector('.Rapids-container'));
    let option = {
      grid: {
        left:0,
        top:0,
        right:0,
        bottom:0,
        containLabel: false,
        show: false,
        height: 65,
      },
      xAxis: [
        {
          type: 'value',
          show: false,
          min: 10,
          max: 400
        }
      ],
      yAxis: [
        {
          type: 'category',
          data: ['周一'],
          show: false
        }
      ],
      series: [
        {
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              name: ' ',
              show: true,
              position: 'inside',
              formatter: "{b}",
              fontSize: 16,
              verticalAlign: 'middle',
              fontWeight: 900,
            }
          },
          barWidth: 75,
          data:[
          {
            name: 'Arrow\nRead',
            itemStyle: { color: 'black' },
            value: [30]
          },
          {
            name: QUERY,
            label: { fontSize: 10 },
            itemStyle: { color: COLOR['0'] },
            value: [20]
          },
          {
            name: ETL,
            label: { fontSize: 10 },
            itemStyle: { color: COLOR['5'] },
            value: [20]
          },
          {
            name: 'ML\nTrain',
            label: { fontSize: 10 },
            itemStyle: { color: COLOR['14'] },
            value: [20]
          },
          ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    dataChart.setOption(option);
    window.addEventListener('resize', () => { dataChart.resize(); })
    }
  render() {
    return (
      <div className='Rapids-container'></div>
    )
  }
}