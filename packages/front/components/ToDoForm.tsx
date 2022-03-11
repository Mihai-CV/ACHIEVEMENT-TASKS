import { useUser } from "@auth0/nextjs-auth0";
import React, { useEffect, useState } from "react";
import { useInfo } from "../lib/useInfo";

export const ToDoForm = () => {
  const [description, setDescription] = useState();
  const [achievement, setAchievement] = useState(5);
  const [_, { sendLocalTask }] = useInfo();
  const { user } = useUser();
  const user_id = user?.sub;
  const handleSend = () => {
    if(description != "" && description != " "){
      sendLocalTask(description, achievement, user_id);
    }
    setDescription("");
  };

  useEffect(() => {
    const fn = (e: any) => {
      if (e.key === "Enter") {
        handleSend();
      }
    };
    window.addEventListener("keydown", fn);
    return () => {
      window.removeEventListener("keydown", fn);
    };
  }, [description]);
  return (
    <div className="formTask">
      <input
        className="inputTask"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task!"
      />
      <select className="selectorTask" name="achievement" onChange={(e) => setAchievement(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <button className="btnTask" type="button" onClick={() => handleSend()}>
        Send
      </button>
    </div>
  );
};
