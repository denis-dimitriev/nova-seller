import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Lending from "../lending/lending";
import { PrivateRoute } from "./controller/private-route/PrivateRoute";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route index element={<PrivateRoute />}></Route>
          <Route path="/welcome" element={<Lending />} />
        </Routes>
      </Layout>
    </Fragment>
  );
};

export default App;
