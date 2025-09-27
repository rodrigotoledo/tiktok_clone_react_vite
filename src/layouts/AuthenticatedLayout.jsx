import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AuthenticatedLayout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header isAuthenticated={true} />
      <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AuthenticatedLayout