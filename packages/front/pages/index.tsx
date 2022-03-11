/* eslint-disable linebreak-style */
import { useUser } from "@auth0/nextjs-auth0";
import React from "react";
import { Profile } from "../components/Profile";
import { Score } from "../components/Score";
import { ToDo } from "../components/ToDoList";

const IndexPage = () => {
  const { user } = useUser();
  return (
    <>
      {!user && (
        <div className="sincontainer">
          <h2 className="sinh2">to-Achieve</h2>
          <div className="sindiv">
            This is a page dedicated to Task Management and personal productivity. Focus your tasks
            as if they were achievements!
          </div>
          <a href="/api/auth/login" className="btnLogin">
            Login
          </a>
        </div>
      )}
      {user && (
        <div className="Container">
          <div className="menu">
            <h1>to-Achieve</h1>
            <ul>
              <li className="menuLi menuLiTask">Task Manager</li>
              <li className="menuLi">Notes</li>
            </ul>
            <div className="scoreManager">
              <Score />
            </div>
          </div>
          <div className="mainContainer">
            <div className="profile">
              <Profile />
            </div>
            <div className="mainContent">
              <h2>My Tasks</h2>
              <ToDo />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndexPage;
