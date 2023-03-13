import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import About from '../../src/About';
// import HelloWorld from '../../src/HelloWorld';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* <Routes>
          <Route path="/about" Component={About} />
          <Route path="/" Component={HelloWorld}/>
        </Routes> */}
      </div>
    </Router>
  );
}