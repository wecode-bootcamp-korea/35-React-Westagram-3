import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/common.scss';
import './styles/reset.scss';
import './pages/young/Login/LoginYoung.scss';
import './pages/young/Main/MainYoung.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
