import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import HomePage from './screens/HomePage'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCreateForm from './screens/userCreateForm/UserCreateForm';
import Success from './screens/sucess/Success';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <HomePage/> */}
    <Router>
            <Routes>
              <Route path="/" element={<HomePage/>} Component={HomePage}/>
              <Route path="/create-user/" element={<UserCreateForm/>} />
              <Route path="/success/" element={<Success/>} />
            </Routes>
    </Router>

    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
