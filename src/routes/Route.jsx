import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login';
import Register from '../components/pages/Register/Register';
import Booking from '../components/Booking/Booking';
import BookedPage from '../components/pages/BookedPage/BookedPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'booking',
        element: <Booking></Booking>,
      },
    ],
  },
  {
    path: 'booked',
    element: (
      <PrivateRoute>
        <BookedPage></BookedPage>
      </PrivateRoute>
    ),
  },
  {
    path: 'login',
    element: <Login></Login>,
  },
  {
    path: 'register',
    element: <Register></Register>,
  },
]);

export default router;
