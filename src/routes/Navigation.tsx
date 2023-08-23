import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/';

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
            <li><NavLink to='/lazy1' className={({isActive})=> isActiveClass(isActive)} >Lazy 1</NavLink></li>
            <li><NavLink to='/lazy2' className={({isActive})=> isActiveClass(isActive)}>Lazy 2</NavLink></li>
            <li><NavLink to='/lazy3' className={({isActive})=> isActiveClass(isActive)}>Lazy 3</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='lazy1' element={<LazyPage1/>}/>
          <Route path='lazy2' element={<LazyPage2/>}/>
          <Route path='lazy3' element={<LazyPage3/>}/>
          
          <Route path='*' element={<Navigate to="/" replace />}/>

        </Routes>
      </div>
    </BrowserRouter>
  )
}
