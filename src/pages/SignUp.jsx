import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function SignUp({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email_address: '',
    password: '',
    password_confirmation: ''
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
      email_address: formData.email_address,
      password: formData.password,
      password_confirmation: formData.password_confirmation
    }
    try {
      const { data } = await axios.post('/registration', payload)
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('email_address', data.email_address);
      setIsAuthenticated(true);
      
      setNotice('Signed in successfully')
      setError('')
      navigate('/posts')
    } catch (err) {
      console.log(err)
      setError(err.response?.data?.error || 'Sign up failed: please try again.')
      setNotice('')
    }
  }

  return (
    <div className="min-w-1/3 max-w-md mx-auto bg-gray-900 rounded-xl shadow-lg p-8 border border-fuchsia-700">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h1>

      {error && <div className="mb-4 text-red-400">{error}</div>}
      {notice && <div className="mb-4 text-green-400">{notice}</div>}

      <div className="mb-4">
        <label htmlFor="email_address" className="block text-white mb-2">
          Email
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

      <div className="mb-6">
        <label htmlFor="password" className="block text-white mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
          maxLength={72}
          className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password_confirmation" className="block text-white mb-2">
          Password confirmation
        </label>
        <input
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
          required
          placeholder="Fill in your password again"
          maxLength={72}
          className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
        />
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-full bg-fuchsia-700 text-white font-bold hover:bg-fuchsia-800 transition"
        >
          Sign Up
        </button>
      </div>

      <div className="mt-4 text-center flex justify-between">
        <Link to="/" className="text-fuchsia-400 hover:underline">
          Sign In
        </Link>
        <Link to="/forgot-password" className="text-fuchsia-400 hover:underline">
          Forgot password?
        </Link>
      </div>
    </div>
  )
}

export default SignUp