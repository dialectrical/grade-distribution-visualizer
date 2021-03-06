import React, { useState, useEffect } from "react";
import { BarGraph } from "./BarGraph";
import { MeanMedianMode } from "./MeanMedianMode";
import { Button } from "./Button";
import { TextInput } from "./TextInput";

let input = new Array(13);

export const GradeVisualizer = (props) => {
  const [grades, setGrades] = useState(new Array(13));
  const gradeValues = [
    4.3, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0.7, 0,
  ];
  const gradeLetters = [
    "A+",
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "C-",
    "D+",
    "D",
    "D-",
    "F",
  ];

  console.log("rendered");

  return (
    <div>
      <BarGraph arr={grades} />
      <br />
      <MeanMedianMode
        gradeArr={grades}
        gradeValues={gradeValues}
        gradeLetters={gradeLetters}
      />
      <br />
      <Button fn={setGrades} arr={input} />
      <div>
        <TextInput gradeLabel="A+" arr={input} index={0} />
        <TextInput gradeLabel="A" arr={input} index={1} />
        <TextInput gradeLabel="A-" arr={input} index={2} />
        <TextInput gradeLabel="B+" arr={input} index={3} />
        <TextInput gradeLabel="B" arr={input} index={4} />
        <TextInput gradeLabel="B-" arr={input} index={5} />
        <TextInput gradeLabel="C+" arr={input} index={6} />
        <TextInput gradeLabel="C" arr={input} index={7} />
        <TextInput gradeLabel="C-" arr={input} index={8} />
        <TextInput gradeLabel="D+" arr={input} index={9} />
        <TextInput gradeLabel="D" arr={input} index={10} />
        <TextInput gradeLabel="D-" arr={input} index={11} />
        <TextInput gradeLabel="F" arr={input} index={12} />
      </div>
    </div>
  );
};
