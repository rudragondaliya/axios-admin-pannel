import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Aside = () => {
   
   const [open,setOpen] = useState(true)

  return (
    <>
      <div className='sidebar' data-background-color="dark">
    <div className="sidebar-logo">
      {/* Logo Header */}
      <div className="logo-header" data-background-color="dark">
        <a href="index.html" className="logo">
          <img src={logo} alt="navbar brand" className="navbar-brand" height={20} />
        </a>
        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar">
            <i className="gg-menu-right"/>
          </button>
          <button className="btn btn-toggle sidenav-toggler">
            <i className="gg-menu-left" />
          </button>
        </div>
        <button className="topbar-toggler more">
          <i className="gg-more-vertical-alt" />
        </button>
      </div>
      {/* End Logo Header */}
    </div>
    <div className="sidebar-wrapper scrollbar scrollbar-inner">
      <div className="sidebar-content">
        <ul className="nav nav-secondary">
          <li className="nav-item active">
            <Link to="/"  aria-expanded="false">
              <i className="fas fa-home" />
              <p>Dashboard</p>
              {/* <span className="caret" /> */}
            </Link>
          </li>
          <li className="nav-section">
            <span className="sidebar-mini-icon">
              <i className="fa fa-ellipsis-h" />
            </span>
            <h4 className="text-section">Components</h4>
          </li>
          
          
          <li className="nav-item">
            <Link  to="/Form">
              <i className="fas fa-pen-square" />
              <p>Forms</p>
            </Link>
            
          </li>
          <li className="nav-item">
            <Link  to="/Table">
              <i className="fas fa-table" />
              <p>Tables</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
    </>
  );
}

export default Aside;
