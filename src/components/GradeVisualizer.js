import React, { useState, useEffect } from "react";

export const GradeVisualizer = (props) => {
  const [grades, setGrades] = useState(new Array(13));
  let input = new Array(13);

  useEffect(() => {
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] === 0) {
        return false;
      }
    }

    props.map.clear();
    const gradeValues = [
      4.0, 4.0, 3.7, 3.3, 3.0, 2.2, 2.3, 2.0, 1.7, 1.3, 1.0, 0.7, 0,
    ];

    for (let i = 0; i < grades.length; i++) {
      map.set(gradeValues[i], grades[i]);
    }
    console.log(map);
  });

  return (
    <div>
      <BarGraph data={grades} />
      <div>
        <MeanMedianMode data={props.map} />
      </div>
      <Button fn={setGrades} />
      //<div>text areas</div>
    </div>
  );
};
