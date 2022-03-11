import React, { Children, useState } from "react";
import useSWR from "swr";
import { useInfo } from "../lib/useInfo";
import _ from 'lodash';
import lodash from "lodash";


export const SubScore = ({e}) => {
 
  return (
    <div className="subScore">{e}</div>
  );
};
