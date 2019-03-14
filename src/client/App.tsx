import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AllBlogs from "./components/public/AllBlogs";
export default class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route exact path="/" component={AllBlogs} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

interface IAppProps {}

interface IAppState {}
