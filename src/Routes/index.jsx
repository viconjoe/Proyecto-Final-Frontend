import { createBrowserRouter } from 'react-router-dom'

import Home from '../Pages/Home/Home'
//import Login from '../Pages/Login/Login'
import Layout from '../Layouts/Layout'
import PictoPlan from '../Pages/Pictoplan/Pictoplan'
import AddImages from '../Pages/AddImages/AddImages'
import Relax from '../Pages/Relax/Relax'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/pictoplan',
          element: <PictoPlan />
        },
        {
          path: '/addimages',
          element: <AddImages />
        },
        {
          path: '/relax',
          element: <Relax />
        },

    ]
  },

])

export default router