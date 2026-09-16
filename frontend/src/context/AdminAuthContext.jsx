import { createContext, useContext, useState } from 'react'
import api from '../lib/api'

const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    const raw = localStorage.getItem('physichem_admin')
    return raw ? JSON.parse(raw) : null
  })

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password })
    localStorage.setItem('physichem_admin_token', data.token)
    localStorage.setItem('physichem_admin', JSON.stringify(data.admin))
    setAdmin(data.admin)
    return data
  }

  const logout = () => {
    localStorage.removeItem('physichem_admin_token')
    localStorage.removeItem('physichem_admin')
    setAdmin(null)
  }

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export const useAdminAuth = () => useContext(AdminAuthContext)
