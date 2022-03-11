import { useState } from 'react';
import { createStore, createHook } from 'react-sweet-state';
import { addTasks, addUser, deleteTask, fetcher, updateTasks } from './api';

const Store = createStore({
  initialState: {
    tasks: [],
    users: [],
  },
  actions: {
    sendLocalTask: (description, achievement, user_id) => async({ setState, getState }) => {
      const currentTasks = getState().tasks;
      setState({
        tasks: [...currentTasks, { description, achievement, user_id }],
      });
      await addTasks({ description, achievement, user_id });
    },

    removeTask: (id) => async({ setState, getState }) => {
      const currentTasks = getState().tasks;
      await deleteTask(id);
      setState({
        tasks: currentTasks.filter((task) => task._id !== id)
      })
    },
    markTask: (id, achievement, done, scoreTotal, data) => async({ setState, getState }) => {
      const currentTasks = data;
      
      if(done){
        done=true;
        scoreTotal+=achievement
        await updateTasks({ done, scoreTotal }, id);
      }
      if(done==false){
        done=false;
        await updateTasks({ done, scoreTotal }, id);
      }
    },
    sendUser: (user_id) => async({ setState, getState }) => {
      const currentUser = getState().users;
      /* currentUser.forEach((user) => {
        if(user.user_id === user_id){
          console.log("DENTRO!");
        }
      }) */
      console.log("ASDASDASDuser_id:", user_id);
       setState({
        users: [...currentUser, user_id],
      });
      console.log("currentUer:", currentUser);
      //await addUser(user_id);
    },
  },
  name: 'ToDo',
})

export const useInfo = createHook(Store);