import React from 'react';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import Navbar from './Navbar';
import Main from './Main';

export default () => {
    return (
        <Router>
            <Navbar />
            <Main />
        </Router>
    );
}