import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route.jsx';
import PlaceContext from './PlaceContext/PlaceContext';
import UserContext from './UserContext/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlaceContext>
      <UserContext>
        <RouterProvider router={router}></RouterProvider>
      </UserContext>
    </PlaceContext>
  </React.StrictMode>
);
