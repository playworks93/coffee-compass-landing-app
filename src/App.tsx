import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductCard from './components/ProductCard'
import UserProfile from './components/UserProfile'
import ShoppingCart from './components/ShoppingCart'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Coffee Compass</h1>
          <p className="tagline">Discover Your Perfect Brew</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Personalized Coffee Recommendations</li>
          <li>Robust Product Catalog</li>
          <li>User Reviews and Ratings</li>
          <li>Seamless Checkout Process</li>
          <li>Subscription Services for Regular Orders</li>
          <li>Advanced Search and Filtering Options</li>
          </ul>
        </div>
        <p>&copy; 2025 Coffee Compass. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App