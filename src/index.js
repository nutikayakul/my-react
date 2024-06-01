import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './component/Home';
import About from './component/About';
import Blog from './component/Blog';
import Contact from './component/Contact';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import Button from '@mui/material/Button';


import './index.css';
import Register from './component/Register';

const router = createBrowserRouter([{
        path: "/",
        element: < Home / >
    },
    {
        path: "About",
        element: < About / >
    },
    {
        path: "Blog",
        element: < Blog / >
    },
    {
        path: "Contact",
        element: < Contact / >
    },
    {
        path: "Register",
        element: < Register / >
    }
])

ReactDOM.createRoot(document.getElementById('root')).render( <
    React.StrictMode >
    <
    RouterProvider router = { router }
    /> <
    /React.StrictMode>,
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );