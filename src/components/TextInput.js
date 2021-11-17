import React from "react";
import {
  StyledTextInput,
  StyledInputLabel,
  StyledInputContainer,
} from "./styles/StyledTextInput";

export const TextInput = (props) => {
  const handleChange = (event) => {
    let int = parseInt(event.target.value);
    if (int >= 0) {
      props.arr[props.index] = int;
    } else {
      props.arr[props.index] = 0;
    }
    console.log(props.arr);
  };

  return (
    <StyledInputContainer>
      <StyledInputLabel>{props.gradeLabel}</StyledInputLabel>
      <StyledTextInput type="text" onChange={handleChange} />
    </StyledInputContainer>
  );
};
