import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import { Counter } from "./features/counter/Counter";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Banner from "./components/common/banner";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./constants/themes/DarkTheme";
import { BodyTheme } from "./baseUI/body";
import { LightTheme } from "./constants/themes/LightTheme";

const HomePage = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./components/login"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading....</h1>}>
        <ThemeProvider theme={LightTheme}>
          <BodyTheme>
            <BrowserRouter>
              <Header />
              <Banner />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={HomePage} />
              </Switch>
              <Footer />
            </BrowserRouter>
          </BodyTheme>
        </ThemeProvider>
      </Suspense>
    </>
  );
}

export default App;
