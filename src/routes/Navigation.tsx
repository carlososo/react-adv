import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom';

import logo from '../logo.svg'

export const Navigation = () => {

  /* 
  * isActiveClass es una funcion que regresa la clase nav-active si el elemento esta activo 
  dependiendo del valor de isActive que viene desde NavLink
  */
  const isActiveClass = (isActive: boolean ) => {
    return isActive ? 'nav-active': ""
  }


  
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li><NavLink to='/' className={({isActive})=> isActiveClass(isActive)} >Home</NavLink></li>
            <li><NavLink to='/about' className={({isActive})=> isActiveClass(isActive)}>About</NavLink></li>
            <li><NavLink to='/users' className={({isActive})=> isActiveClass(isActive)}>Users</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='about' element={<h1> aboutPage</h1>}/>
          <Route path='users' element={<h1>Users PAge</h1>}/>
          <Route path='/' element={<h1>Home</h1>}/>
          <Route path='*' element={<Navigate to="/" replace />}/>

        </Routes>
      </div>
    </BrowserRouter>
  )
}
