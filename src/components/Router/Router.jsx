import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../../pages/Login/Login';
import Notes from '../../pages/Notes/Notes';
import Archive from '../../pages/Archive/Archive';
import NotFound from '../../pages/NotFound/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/notes" element={<Notes />} />
        <Route exact path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
