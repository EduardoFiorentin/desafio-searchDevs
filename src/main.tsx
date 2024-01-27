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
    path: "/home",
    element: <Home/>,
  },
  {
    path: "profile/:name",
    element: <Profile/>,
  },
  {
    path: "/",
    element: <Navigate to="/home"/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
