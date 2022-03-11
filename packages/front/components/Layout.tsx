import { useUser } from "@auth0/nextjs-auth0";
import React, { useEffect } from "react";
import Head from "next/head";
import { useInfo } from "../lib/useInfo";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();
  console.log("layout", user?.sub);
  const [_, {sendUser}] = useInfo();
  const auth_id = user?.sub;
   useEffect(()  => {
    console.log("usuario detectado!");
    if(user){
        sendUser(auth_id)
    }
  }, [])
  return (
    <>
      <div>
        <Head>
          <title>to-Achieve</title>
        </Head>
      </div>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
