import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./index.css";

import Filter from "./components/Filter";
import Table from "./components/Table";
const Editpage = lazy(() => import("./pages/editpage"));
export const Routes = () => {
  return (
    <div className="">
      <Router>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen w-ful h-fulll ">
              <div className="loadersmall" />
            </div>
          }
        >
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <div className="container mx-auto my-10">
                    <Filter filterBY={"cluster"} />

                    <Table />
                  </div>
                );
              }}
            />
            <Route
              path="/warehouse/:id"
              exact
              render={() => <Editpage />}
            />
            <Route
              path="**"
              exact
              render={() => {
                return (
                  <div className="mx-auto my-40 text-center ">
                    <div className="my-20">404 page not found </div>
                    <Link
                      to="/"
                      className="px-8 py-3 font-bold text-white bg-blue-500"
                    >
                      GO HOME
                    </Link>
                  </div>
                );
              }}
            />
          </Switch>
        </Suspense>

        {/*  */}
      </Router>
    </div>
  );
};
