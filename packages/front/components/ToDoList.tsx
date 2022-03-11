import React, { useEffect } from 'react';
import { useInfo } from '../lib/useInfo';
import { Task } from './Task';
import { ToDoForm } from './ToDoForm';
import useSWR from 'swr';
import { useUser } from '@auth0/nextjs-auth0';
import { fetcher } from '../lib/api';
import _ from 'lodash';
import lodash from "lodash";

export const ToDo = () => {
    //const [{ tasks }, {getLocalTask}] = useInfo();
    const { user } = useUser();
    const user_id = user?.sub; 

    const { data } = useSWR([`/tasks`, user_id], fetcher);
    /* useEffect(() => {
      const intervalID = setInterval(() => {
      getLocalTask();
    }, 100);
    return () => clearInterval(intervalID);
    }, []) */

    return (
      <div>
        <ToDoForm />
        <div className='tareaLongitud'>Tienes {data?.length} tareas en tu lista</div>
        {data?.map((e, i) => (
          <div key={e._id}>
            <Task key={i} task={e}> {e.description} </Task>
          </div>
        ))}
      </div>
    );
  };