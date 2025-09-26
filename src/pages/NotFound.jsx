import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-fuchsia-700 text-white rounded-full hover:bg-fuchsia-800 transition"
      >
        Go to Home
      </Link>
    </div>
  )
}

export default NotFound