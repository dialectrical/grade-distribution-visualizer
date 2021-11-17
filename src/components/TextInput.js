import React from "react";

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
    <div>
      {props.gradeLabel}
      <input type="text" onChange={handleChange} />
    </div>
  );
};
