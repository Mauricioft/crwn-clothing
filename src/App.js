import React from 'react'
import Home from './pages/home/index.jsx'
import { Switch, Route, Link } from 'react-router-dom'

const HastPage = () => (
  <div>
    <Link to='/'>Home</Link>
    <h1>HATS PAGE</h1>
  </div>
)

const App = () => (
  <Switch>  
    <Route exact path="/" component={Home} />
    <Route path="/hats" component={HastPage} />
  </Switch>
)

export default App
