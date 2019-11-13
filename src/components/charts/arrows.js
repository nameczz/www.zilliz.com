import React from 'react'
import {scaleLinear} from 'd3-scale'

const RECT_WIDTH = [200, 300, 600]
let RECT_HEIGHT = 6;  // 线条宽度
const y = 60;   // 竖条到横条距离
const containerHeight = 2 * y + RECT_HEIGHT;  // 容器高度
const middle_height = containerHeight / 2; // 中间点
const arrow_len = 30; // 箭头长度

const linear = scaleLinear()
  .domain([0, Math.max.apply(this, RECT_WIDTH)])
  .range([0, 600]);

// 箭头三个点坐标
const POINT_Start = `${0},${middle_height} `;
const POINT_1 = `${arrow_len},${middle_height - 8} `;
const POINT_2 = `${arrow_len},${middle_height + 8} `;

const POINT2_Start = `${160},${middle_height} `;
const POINT2_1 = `${190},${middle_height - 8} `;
const POINT2_2 = `${190},${middle_height + 8} `;

export const RectTop = () => (
  <svg className='rect-short' width='100%' height={containerHeight} >
    <g>
      <polygon
        points={`${POINT_Start}, ${POINT_1},${POINT_2}`}
        style={{
          fill: 'gray'
        }}
      />
    </g>
    <g>
      <rect
        x={30} y={y}
        width={linear(RECT_WIDTH[0]) - 30} height={RECT_HEIGHT}
        style={{
          fill: 'gray',
          strokeLinecap: 'miter'
        }}
      >
      </rect>
    </g>
    <g>
      <rect
        x={linear(RECT_WIDTH[0]) - 1} y={0}
        width={RECT_HEIGHT} height={y + RECT_HEIGHT}
        style={{
          fill: 'gray',
          strokeLinecap: 'miter'
        }}
      >
      </rect>
    </g>
  </svg>
)

export const RectMiddle = () => (
  <svg className='rect-two' width='100%' height={containerHeight} >
    <g>
      <polygon
        points={`${POINT2_Start}, ${POINT2_1},${POINT2_2}`}
        style={{
          fill: 'gray'
        }}
      />
    </g>
    <g>
      <rect
        x={170} y={y}
        width={linear(RECT_WIDTH[0]) - 80} height={RECT_HEIGHT}
        style={{
          fill: 'gray',
          strokeLinecap: 'miter'
        }}
      >
      </rect>
    </g>
    <g>
      <rect
        x={linear(RECT_WIDTH[0]) + 90} y={0}
        width={RECT_HEIGHT} height={3 * y + 3 * RECT_HEIGHT }
        style={{
          fill: 'gray',
          strokeLinecap: 'miter'
        }}
      >
      </rect>
    </g>
  </svg>
)
export const RectVBottom = () => (
  <svg className='rect-medium' width='100%' height={containerHeight} >
    <g>
      <polygon
        points={`${POINT_Start}, ${POINT_1},${POINT_2}`}
        style={{
          fill: 'gray'
        }}
      />
    </g>
    <g>
      <rect
        x={30} y={y}
        width={linear(RECT_WIDTH[1]) - 40} height={RECT_HEIGHT}
        style={{
          fill: 'gray',
          strokeLinecap: 'miter'
        }}
      >
      </rect>
    </g>
    <g>
      <rect
        x={linear(RECT_WIDTH[0]) + 90} y={0}
        width={RECT_HEIGHT} height={y + RECT_HEIGHT}
        style={{
          fill: 'gray',
          strokeLinecap: 'miter'
        }}
      >
      </rect>
    </g>
  </svg>
)