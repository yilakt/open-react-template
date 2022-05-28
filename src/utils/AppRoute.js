import React, { useState } from "react";
import { Route } from "react-router-dom";
// Context
import GlobalContext from "../context/globalContext";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  Layout = Layout === undefined ? (props) => <>{props.children}</> : Layout;
  const [globalState, setGlobalContext] = useState({ showDefaultModal: false });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalContext }}>
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    </GlobalContext.Provider>
  );
};

export default AppRoute;
