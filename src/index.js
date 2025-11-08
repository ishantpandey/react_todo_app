import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Todo from './Todo';
import Profile from './Profile'; // Import the Profile component

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);