import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'



import App from './App';
import Error from './pages/Error';
import SearchBar from './pages/SearchBar';
import Applied from './pages/Applied';
import Saved from './pages/Saved';
import Interviews from './pages/Interviews';
import Rejected from './pages/Rejected'
import FollowUp from './pages/FollowUp'


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [

      {
        path: '/SearchBar',
        element: <SearchBar />,
      },
      {
        path: '/Applied',
        element: <Applied />,
      },
      {
        path: '/Saved',
        element: <Saved />,
      },
      {
        path: '/Interviews',
        element: <Interviews />,
      },

      {
        path: '/Rejected',
        element: <Rejected />,
      },
      {
        path: '/FollowUp',
        element: <FollowUp />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}