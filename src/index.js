import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import Hi from './Hi';



const myRouter = createBrowserRouter([
  {
    path: '/',
    element : <Home />
  },
  // {
  //   path : '/about',
  //   element : <About />
  // },
  // {
  //   path : '/products',
  //   element : <Products />
  // },
  // {
  //   path: '/orders',
  //   element:  < Orders/>
  // },
  // {
  //   path : 'contact',
  //   element: < Contact/>
  // }
])

ReactDOM.render(
  <>
  <Navbar></Navbar> 
  <RouterProvider router={myRouter} />

  </>
  ,
  document.getElementById('root')
);
