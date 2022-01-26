import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
