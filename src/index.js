import React from 'react';
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Todo from './Todo';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Todo />);