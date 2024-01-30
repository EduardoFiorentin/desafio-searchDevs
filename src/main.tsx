import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.tsx';
import Profile from './Pages/Profile/Profile.tsx';

const router = createBrowserRouter([
  {
    path: "/desafio-searchDevs/home",
    element: <Home/>,
  },
  {
    path: "/desafio-searchDevs/profile/:name",
    element: <Profile/>,
  },
  {
    path: "/desafio-searchDevs",
    element: <Navigate to="/desafio-searchDevs/home"/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
