import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props: IChartProps) => {
  const dataPointValues = props.dataPoints.map((datpoint) => datpoint.value);
  const maxExpenseMonthValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxExpenseMonthValue}
        />
      ))}
    </div>
  );
};

export default Chart;
