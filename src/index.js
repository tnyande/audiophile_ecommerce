import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Hero from './component/Hero';
import reportWebVitals from './reportWebVitals';
import Headfone from './Headfone';
import Speakers from './Speakers';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Earfone from './Earfone';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "headfones",
      element: <Headfone />
    },
    {
      path:'speakers',
      element: <Speakers />
    },
    {
      path:'earfones',
      element: <Earfone />
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
