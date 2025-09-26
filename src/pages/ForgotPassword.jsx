import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function ForgotPassword({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email_address: ''
  })
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const payload = {
      email_address: formData.email_address
    }
    try {
      await axios.post('/passwords', payload)
      setIsAuthenticated(false);
      
      setNotice('Instructions to reset your password have been sent to your email.')
      setError('')
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.error || 'Instructions could not be sent. Please try again.')
      setNotice('')
    }
  }

  return (
    <div className="min-w-1/3 max-w-md mx-auto mt-10 bg-gray-900 rounded-xl shadow-lg p-8 border border-fuchsia-700">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Forgot Password?!</h1>

      {error && <div className="mb-4 text-red-400">{error}</div>}
      {notice && <div className="mb-4 text-green-400">{notice}</div>}

      <div className="mb-4">
        <label htmlFor="email_address" className="block text-white mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email_address"
          value={formData.email_address}
          onChange={handleChange}
          required
          autoFocus
          autoComplete="username"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
        />
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-full bg-fuchsia-700 text-white font-bold hover:bg-fuchsia-800 transition"
        >
          Send Instructions
        </button>
      </div>

      <div className="mt-4 text-center flex justify-between">
        <div className='flex justify-between space-x-4'>
          <Link to="/" className="text-fuchsia-400 hover:underline">
            Sign In
          </Link>
          <Link to="/sign-up" className="text-fuchsia-400 hover:underline">
            Sign Up
          </Link>
        </div>
        <Link to="/forgot-password" className="text-fuchsia-400 hover:underline">
          Forgot password?
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword