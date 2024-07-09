import { Outlet, NavLink } from "react-router-dom";
import './RootLayout.css'
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";



export default function RootLayout() {
  const [value] = useState('')

  const onSearch = (searchItem) =>{
    console.log('search', searchItem)
  }
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">
            <div className="home-link">
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"></link>
              <i class="fa-solid fa-house"></i>
            </div> 
          </NavLink>


          <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." />
            <div className="Button-search"><button onClick={()=>onSearch(value)}>search</button></div>
          </div>


          
          <NavLink to="login">login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
