import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { TextInput } from "./TextInput";

let input = new Array(13);

export const GradeVisualizer = (props) => {
  const [grades, setGrades] = useState(new Array(13));

  useEffect(() => {
    console.log(input);
    console.log(grades);
    props.map.clear();
    const gradeValues = [
      4.0, 4.0, 3.7, 3.3, 3.0, 2.2, 2.3, 2.0, 1.7, 1.3, 1.0, 0.7, 0,
    ];

    for (let i = 0; i < grades.length; i++) {
      if (grades[i] === undefined) {
        console.log(grades[i]);
        props.map.set(gradeValues[i], 0);
      } else {
        console.log("value found");
        console.log(gradeValues[i]);
        console.log(grades[i]);
        props.map.set(gradeValues[i], grades[i]);
      }
    }
    console.log(props.map);
  });

  return (
    <div>
      <Button fn={setGrades} arr={input} />
      <div>
        <TextInput gradeLabel="🇦" arr={input} index={0} />
        <TextInput gradeLabel="🇦" arr={input} index={1} />
        <TextInput gradeLabel="🇦" arr={input} index={2} />
        <TextInput gradeLabel="🇦" arr={input} index={3} />
        <TextInput gradeLabel="🇦" arr={input} index={4} />
        <TextInput gradeLabel="🇦" arr={input} index={5} />
        <TextInput gradeLabel="🇦" arr={input} index={6} />
        <TextInput gradeLabel="🇦" arr={input} index={7} />
        <TextInput gradeLabel="🇦" arr={input} index={8} />
        <TextInput gradeLabel="🇦" arr={input} index={9} />
        <TextInput gradeLabel="🇦" arr={input} index={10} />
        <TextInput gradeLabel="🇦" arr={input} index={11} />
        <TextInput gradeLabel="🇦" arr={input} index={12} />
      </div>
    </div>
  );
};
