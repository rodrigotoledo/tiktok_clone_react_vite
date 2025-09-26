import { Outlet } from 'react-router-dom'

function UnauthenticatedLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  )
}

export default UnauthenticatedLayout