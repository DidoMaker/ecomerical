import { Outlet, NavLink } from "react-router-dom";
import './RootLayout.css'
import React from 'react';



export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">
            <div className="fb-link">
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"></link>
              <i class="fa-brands fa-google-plus-g google"></i>
            </div> 
          </NavLink>
          <NavLink to="login">login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
