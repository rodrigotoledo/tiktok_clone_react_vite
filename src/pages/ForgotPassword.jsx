import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ForgotPassword({ setUser }) {
  const [formData, setFormData] = useState({
    email_address: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (res.ok) {
        setUser(data.user || { email_address: formData.email_address })
        setNotice('Signed in successfully')
        setError('')
        navigate('/')
      } else {
        setError(data.error || 'Invalid email address or password')
        setNotice('')
      }
    } catch {
      setError('Network error')
      setNotice('')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 rounded-xl shadow-lg p-8 border border-fuchsia-700">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Sign In</h1>

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
          autoComplete="current-password"
          placeholder="Enter your password"
          maxLength={72}
          className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
        />
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-full bg-fuchsia-700 text-white font-bold hover:bg-fuchsia-800 transition"
        >
          Sign In
        </button>
      </div>

      <div className="mt-4 text-center">
        <Link to="/passwords" className="text-fuchsia-400 hover:underline">
          Forgot password?
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword