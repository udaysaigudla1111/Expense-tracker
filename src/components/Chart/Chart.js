import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";












const Chart = (props) => {
     const datapointValues =  props.datapoints.map(datapoint => datapoint.value);
     const totalmaximum = Math.max(...datapointValues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar 
        key = {datapoint.label}
        value = {datapoint.value}
        maxValue = {totalmaximum}
        label ={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
