import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'personalized_coffee_recommendations' ? 'active' : ''}
          onClick={() => setActiveTab('personalized_coffee_recommendations')}
        >
          Personalized Coffee Recommendations
        </button>
        <button 
          className={activeTab === 'robust_product_catalog' ? 'active' : ''}
          onClick={() => setActiveTab('robust_product_catalog')}
        >
          Robust Product Catalog
        </button>
        <button 
          className={activeTab === 'user_reviews_and_ratings' ? 'active' : ''}
          onClick={() => setActiveTab('user_reviews_and_ratings')}
        >
          User Reviews And Ratings
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'personalized_coffee_recommendations' && (
          <div className="tab-content">
            <h2>Personalized Coffee Recommendations</h2>
            <p>Manage your personalized coffee recommendations here.</p>
          </div>
        )}

        {activeTab === 'robust_product_catalog' && (
          <div className="tab-content">
            <h2>Robust Product Catalog</h2>
            <p>Manage your robust product catalog here.</p>
          </div>
        )}

        {activeTab === 'user_reviews_and_ratings' && (
          <div className="tab-content">
            <h2>User Reviews and Ratings</h2>
            <p>Manage your user reviews and ratings here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard