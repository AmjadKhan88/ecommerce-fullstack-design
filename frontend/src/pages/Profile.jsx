import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Profile(){
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/')
  }

  if(!user) return null;

  return (
    <div className="max-w-[900px] mx-auto p-6 bg-white rounded mt-6">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="flex items-center gap-4">
        <img src={user.image || 'https://via.placeholder.com/80'} className="w-20 h-20 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{user.name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      </div>

      <div className="mt-6">
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </div>
  )
}
