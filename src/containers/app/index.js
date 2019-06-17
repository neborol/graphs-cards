import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Dashboard from '../dashboard'

const App = () => (
  <div className="subApp__container">
    <header>
      <div className="appTitlebar">
        <h3>AlfanFrontEndTest</h3>
      </div>
    </header>

    <main>
      <div className="leftMenu">
        <div className="menuLinks">
          <h3>Menu</h3>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>

      </div>

      <div className="mainDisplay">
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </main>
  </div>
)

export default App
