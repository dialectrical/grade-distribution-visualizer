import React, { useEffect } from "react";

export const MeanMedianMode = (props) => {
  let datasetSize = 0;
  let mean = 0;
  let modeCounter = 0;
  let mode = [];
  let medianCounter = 0;
  let medianFreq = 0;
  let median = -1;

  for (let i = 0; i < props.gradeArr.length; i++) {
    datasetSize += props.gradeArr[i];
  }
  medianCounter = Math.floor(datasetSize / 2);

  for (let i = 0; i < props.gradeArr.length; i++) {
    mean += props.gradeArr[i] * props.gradeValues[i];
    if (props.gradeArr[i] > modeCounter) {
      modeCounter = props.gradeArr[i];
      mode.push(props.gradeValues[i]);
    } else if (props.gradeArr[i] === modeCounter) {
      mode.push(props.gradeValues[i]);
    }
    medianCounter -= props.gradeArr[i];
    if (medianCounter <= 0 && median === -1) {
      median = props.gradeValues[i];
      medianFreq = props.gradeArr[i];
    } else if (props.gradeArr[i] === medianFreq) {
      median = (median + props.gradeValues[i]) / 2;
    }
  }

  mean = mean / datasetSize;

  for (let i = 0; i < props.gradeArr.length; i++) {
    if (mean >= props.gradeValues[i]) {
      mean = props.gradeValues[i];
      break;
    }
  }

  return (
    <div>
      <p>Mean: {mean}</p>
      <p>Median: {median}</p>
      <p>Mode: {mode}</p>
    </div>
  );
};
