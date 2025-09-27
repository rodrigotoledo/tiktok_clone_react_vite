import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/axios.js'

function ResetPassword() {
  const { token } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    password: '',
    password_confirmation: ''
  })
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const passwordInputRef = useRef(null)

  useEffect(() => {
    passwordInputRef.current?.focus()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const payload = {
      password: formData.password,
      password_confirmation: formData.password_confirmation,
      token: token
    }
    try {
      console.log('Sending PUT to', `${import.meta.env.VITE_API_BASE_URL}/passwords/${token}`, 'with:', payload)
      const { data, status } = await api.put(`/passwords/${token}`, payload)
      console.log('Response:', { status, data })
      setNotice('Password updated successfully... Redirecting to sign in.')
      setError('')
      setTimeout(() => navigate('/'), 1000) // Redirect to login after 2s
    } catch (err) {
      console.error('Axios error:', err.response?.data, err.message)
      setError(err.response?.data?.error || `Password update failed: ${err.message}`)
      setNotice('')
    }
  }

  return (
    <div className="min-w-1/3 max-w-md mx-auto bg-gray-900 rounded-xl shadow-lg p-8 border border-fuchsia-700">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Update Your Password</h1>
      {error && <div className="mb-4 text-red-400">{error}</div>}
      {notice && <div className="mb-4 text-green-400">{notice}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white mb-2">
            New Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
            required
            autoFocus
            autoComplete="new-password"
            placeholder="Enter new password"
            maxLength={72}
            ref={passwordInputRef}
            className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password_confirmation" className="block text-white mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
            required
            autoComplete="new-password"
            placeholder="Repeat new password"
            maxLength={72}
            className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-fuchsia-700 text-white font-bold hover:bg-fuchsia-800 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword