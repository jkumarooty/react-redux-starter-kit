import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BaseLayout from './components/BaseLayout'; /* This should be a layout page */
import SearchPage from './components/SearchPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={BaseLayout}>
    <IndexRoute component={SearchPage}/>
    <Route path="Search" component={SearchPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);