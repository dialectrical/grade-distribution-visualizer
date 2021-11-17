import React from "react";

export const TextInput = (props) => {
  handleChange = (event) => {
    let int = parseInt(event.value);
    props.arr[props.index] = int;
  };

  return <input type="text" value="0" onChange={handleChange} />;
};
