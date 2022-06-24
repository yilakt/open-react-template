import React, { useRef, useState, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import amplitude from "amplitude-js";

import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Terms from "./views/Terms";
// import ContactUs from "./views/ContactUs";

// Initialize Google Analytics & Firebase
ReactGA.initialize(process.env.REACT_APP_GA_CODE);
amplitude.getInstance().init(process.env.REACT_APP_AMPLITUDE_SECRET);

firebase.initializeApp(firebaseConfig);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/terms"
            component={Terms}
            layout={LayoutDefault}
          />
        </Switch>
      )}
    />
  );
};

export default App;
