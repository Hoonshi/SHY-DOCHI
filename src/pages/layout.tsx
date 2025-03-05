import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="max-w-[600px] h-screen m-auto bg-[url('/img/고스미.jpg')] bg-center">
      <Outlet />
    </div>
  )
}
