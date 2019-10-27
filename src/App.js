import React from 'react'
import HomePage from './pages/home/index.jsx'
import ShopPage from './pages/shop/index.jsx'
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <Switch>  
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
  </Switch>
)

export default App
