import React from "react";

export const Button = (props) => {
  return <button onClick={() => props.fn(props.arr.slice())}>Go!</button>;
};
