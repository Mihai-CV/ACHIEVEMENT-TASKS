import { useUser } from "@auth0/nextjs-auth0";
import React from "react";

export const Profile = () => {
  const { user } = useUser();

  return (
    <>
      <div>
        <a className="btn-logOut" href="/api/auth/logout">
          Logout
        </a>
      </div>
      <div>
        <li className="profileName">{user?.name}</li>
        <li className="profileMail">{user?.email}</li>
      </div>
      <div className="imgLog">
        <img
          src={user?.picture}
          alt="https://www.component-creator.com/images/testimonials/defaultuser.png"
        />
      </div>
    </>
  );
};
