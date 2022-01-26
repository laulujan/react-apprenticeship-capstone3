import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../../pages/Login/Login';
import Notes from '../../pages/Notes/Notes';
import NotFound from '../../pages/NotFound/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/notes" element={<Notes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
