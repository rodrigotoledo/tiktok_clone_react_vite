import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AuthenticatedLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AuthenticatedLayout