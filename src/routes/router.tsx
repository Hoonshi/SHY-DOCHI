import IntroPage from '@/pages/introPage'
import Layout from '@/pages/layout'

import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: '/', element: <IntroPage /> }]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
