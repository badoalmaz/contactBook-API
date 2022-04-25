import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddContact from '../components/AddContact/AddContact';
import ContactList from '../components/ContsctList/ContactList';
import EditContact from '../components/EditContact/EditContact';
import Home from '../components/Home/Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/list" element={<ContactList />} />
      <Route path="/edit" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
