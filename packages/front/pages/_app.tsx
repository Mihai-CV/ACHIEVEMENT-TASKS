import React from "react";
import useSWR, { SWRConfig } from "swr";
import { fetcher } from "../lib/api";
import { getSession, UserProvider } from "@auth0/nextjs-auth0";
import Layout from "../components/Layout";
import "../public/style.css";

const App = ({ Component, pageprops, initialUser }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 10,
        fetcher,
      }}
    >
      <UserProvider user={initialUser}>
        <Layout>
          <Component {...pageprops} />
        </Layout>
      </UserProvider>
    </SWRConfig>
  );
};

 App.getInitialProps = async ({ ctx }) => {
  const session = getSession(ctx.req, ctx.res);

  console.log("initial USER from initial props");
  console.log(session);

  return {
    initialUser: session?.user,
  };
}; 

export default App;
