import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "../pages/p_landing";
import CreatePoint from "../pages/p_create_points";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/create-point" component={CreatePoint} />
    </BrowserRouter>
  );
}

export default Routes;
