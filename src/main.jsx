import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/root/root';
import Home from './component/home/home';
import Statistics from './component/Statistics/Statistics';
import Dashboard from './component/Dashboard/Dashboard';
import Error from './component/error/error';
import Productdetail from './component/poductdetail/productdetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/allcatagory/:product_id',
        loader:  ()=> fetch('/catagoris.json')  ,
        element: <Productdetail></Productdetail>,
      }
    ]
  },

 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
