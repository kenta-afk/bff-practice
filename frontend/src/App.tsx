import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sayHello } from './services/greeter'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [greeting, setGreeting] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await sayHello(name)
      setGreeting(result.message)
    } catch (err) {
      setError('APIの呼び出しに失敗しました。BFFサーバーが起動していることを確認してください。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>マイクロサービスデモ</h1>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">あなたの名前：</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? '送信中...' : 'あいさつを取得'}
          </button>
        </form>

        {error && <div className="error">{error}</div>}
        {greeting && <div className="greeting">{greeting}</div>}
      </div>

      <div className="card counter">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        React フロントエンド → Node.js BFF → Rust バックエンドのマイクロサービス構成
      </p>
    </>
  )
}

export default App