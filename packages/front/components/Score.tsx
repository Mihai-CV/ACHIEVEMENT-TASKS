import React, { useEffect, useState } from "react";
import _ from "lodash";
import lodash from "lodash";
import useSWR from "swr";
import { useUser } from "@auth0/nextjs-auth0";
import { SubScore } from "./SubScore";

export const Score = () => {
  const { data } = useSWR(`/tasks`);
  const [menu, setMenu] = useState(false);
  const seterMenu = () => {
    setMenu(!menu);
  };

  const styleMenu = (menu) => ({
    transition: "all 0.8s ease",
    opacity: menu ? "1" : "0",
    transform: menu ? "translate(0px, 20px)" : "translate(0)",
  })

  let arr = [];
  let score = 0;
  data?.forEach((task) => {
    arr.push(task.scoreTotal);
    score = lodash.sum(arr);
  });
  console.log(score);
  return (
    <>
      <div className="score" onClick={seterMenu}>
        <p>{score}</p>
      </div>
      {arr.map((e, i) => (
          <div style={styleMenu(menu)}>
              <SubScore e={e}/>
          </div>
      ))}
    </>
  );
};
