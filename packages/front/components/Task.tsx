import React, { useState } from "react";
import useSWR from "swr";
import { useInfo } from "../lib/useInfo";
import _ from 'lodash';
import lodash from "lodash";


export const Task = ({ children, task: {_id, achievement, done, scoreTotal} }) => {
  const [doneState, setDone] = useState(true);
  const [{tasks}, {markTask, removeTask }] = useInfo();
  const { data } = useSWR('/tasks');
  const handleCheck = () => {
    markTask(_id, achievement, doneState, scoreTotal, data)
    setDone(!doneState);
  };

  const handleDelete = () => {
    removeTask(_id);
  };

  const styleDescription = (doneState) => ({
    transition: "all 0.4s ease",
    textDecoration: doneState ?  "none": "line-through"
  })
  const styleTask = (doneState) => ({
    transition: "all 0.2s ease",
    border: doneState ? "2px solid #abacaf" : "4px solid #f9ba17"
  })


  return (
    <div className="task" style={styleTask(doneState)}>
      <div className="taskI">
        <input className="checkbox" type="checkbox" onChange={(handleCheck)} />
        <label className="description" style={styleDescription(doneState)}>{children}</label>
      </div>
     <div className="taskD">
        <label className="achievment">{achievement}</label>
          <button className="btnDelete" href="#" onClick={(handleDelete)}>Delete</button>
     </div>
    </div>
  );
};
