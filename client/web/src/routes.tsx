import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import CreatePoint from './pages/CreatePoint';

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/create-point" component={CreatePoint} />
    </BrowserRouter>

  );
};

export default Routes;