import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Private from '../Private/Private';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Notes from '../../pages/Notes/Notes';
import Archive from '../../pages/Archive/Archive';
import NotFound from '../../pages/NotFound/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/notes"
          element={
            <Private>
              <Notes />
            </Private>
          }
        />
        <Route
          exact
          path="/archive"
          element={
            <Private>
              <Archive />
            </Private>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
