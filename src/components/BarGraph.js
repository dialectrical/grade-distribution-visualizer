import React from "react";
import { StyledBarGraph, StyledBar } from "./styles/StyledBarGraph";

export const BarGraph = (props) => {
  let datasetSize = 0;

  for (let i = 0; i < props.arr.length; i++) {
    datasetSize += props.arr[i];
  }

  console.log((props.arr[2] / datasetSize) * 100);

  return (
    <StyledBarGraph>
      <StyledBar style={{ height: (props.arr[0] / datasetSize) * 100 + "%" }} />
      <StyledBar
        style={{
          height: (props.arr[1] / datasetSize) * 100 + "%",
        }}
      />
      <StyledBar style={{ height: (props.arr[2] / datasetSize) * 100 + "%" }} />
      <StyledBar style={{ height: (props.arr[3] / datasetSize) * 100 + "%" }} />
      <StyledBar style={{ height: (props.arr[4] / datasetSize) * 100 + "%" }} />
      <StyledBar style={{ height: (props.arr[5] / datasetSize) * 100 + "%" }} />
      <StyledBar style={{ height: (props.arr[6] / datasetSize) * 100 + "%" }} />
      <StyledBar style={{ height: (props.arr[7] / datasetSize) * 100 + "%" }} />
      <StyledBar style={{ height: (props.arr[8] / datasetSize) * 100 + "%" }} />
      <StyledBar style={{ height: (props.arr[9] / datasetSize) * 100 + "%" }} />
      <StyledBar
        style={{ height: (props.arr[10] / datasetSize) * 100 + "%" }}
      />
      <StyledBar
        style={{ height: (props.arr[11] / datasetSize) * 100 + "%" }}
      />
      <StyledBar
        style={{ height: (props.arr[12] / datasetSize) * 100 + "%" }}
      />
    </StyledBarGraph>
  );
};
