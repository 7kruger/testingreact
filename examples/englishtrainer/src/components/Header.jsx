import React, { useEffect } from 'react'
import Main from './Main';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './Home';
import Words from './Words';

function Header({ listwords, create, remove }) {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/trainer"}>Trainer</Link>
            </li>
            <li>
              <Link to={"/words"}>Words</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/trainer'} element={<Main listwords={listwords} />} />
          <Route path={'/words'} element={<Words create={create} words={listwords} remove={remove} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Header;