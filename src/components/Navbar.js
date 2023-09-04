import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=> {
  const myStyle={
    fontFamily: 'Bricolage Grotesque, sans-serif'
  }
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/007/681/297/small/mic-logo-symbol-for-tv-or-news-company-free-vector.jpg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2"/>
          <Link className="navbar-brand" to="/" style={{fontFamily: 'Kanit, sans-serif'}}>NewsToday</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={myStyle}>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;

