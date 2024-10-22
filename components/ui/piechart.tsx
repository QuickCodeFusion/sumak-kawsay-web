// sumak-kawsay-web/components/ui/PieChart.tsx
'use client'
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

interface PieChartComponentProps {
  data: Array<{
    title: string
    value: number
    color: string
  }>
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  return (
    <PieChart
      data={data}
      lineWidth={50}
      label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
      labelStyle={() => ({
        fill: '#fff',
        fontSize: '4px',
        fontFamily: 'sans-serif'
      })}
      labelPosition={80}
      radius={40}
      viewBoxSize={[100, 100]}
    />
  )
}

export default PieChartComponent
