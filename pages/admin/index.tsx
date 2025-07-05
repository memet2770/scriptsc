import { useState } from 'react'

export default function Admin() {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = () => {
    if (user === 'admin' && pass === 'ScAdmin@2025') {
      setAuth(true)
    }
  }

  if (!auth) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <input
          className="bg-gray-800 p-2 rounded"
          placeholder="Kullanıcı"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="bg-gray-800 p-2 rounded"
          placeholder="Şifre"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleLogin} className="px-4 py-2 bg-primary rounded">
          Giriş
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-10 space-y-4">
      <h1 className="text-2xl font-bold">Admin Paneli</h1>
      <p>Script ekleme/düzenleme özellikleri buraya gelecek.</p>
    </div>
  )
}
