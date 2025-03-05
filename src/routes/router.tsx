import Construction from '@/pages/construction'
// import IntroPage from '@/pages/introPage'
import Layout from '@/pages/layout'

import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: '/', element: <Construction /> }]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
