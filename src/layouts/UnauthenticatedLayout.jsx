import { Outlet } from 'react-router-dom'

function UnauthenticatedLayout() {
  return (
    <div className='min-h-screen flex-col justify-center items-center flex flex-1'>
      <Outlet />
    </div>
  )
}

export default UnauthenticatedLayout