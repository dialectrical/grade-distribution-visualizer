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
  console.log(datasetSize);
  medianCounter = datasetSize / 2;
  console.log(medianCounter);

  for (let i = 0; i < props.gradeArr.length; i++) {
    mean += props.gradeArr[i] * props.gradeValues[i];
    if (props.gradeArr[i] > modeCounter) {
      modeCounter = props.gradeArr[i];
      mode.push(props.gradeLetters[i]);
    } else if (props.gradeArr[i] === modeCounter) {
      mode.push(props.gradeLetters[i]);
    }
    medianCounter -= props.gradeArr[i];
    if (medianCounter <= 0 && median === -1) {
      medianFreq = props.gradeArr[i];
      if (
        datasetSize % 2 === 0 &&
        i !== 12 &&
        props.gradeArr[i + 1] === props.gradeArr[i]
      ) {
        median = (props.gradeValues[i] + props.gradeValues[i + 1]) / 2;
      } else {
        median = props.gradeValues[i];
      }
    }
  }

  mean = mean / datasetSize;

  for (let i = 0; i < props.gradeArr.length; i++) {
    if (mean >= props.gradeValues[i]) {
      mean = props.gradeLetters[i];
    }
    if (median >= props.gradeValues[i]) {
      median = props.gradeLetters[i];
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
