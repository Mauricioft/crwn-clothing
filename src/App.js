import React from 'react'
import './App.css'
import { Header } from './components/header/index.jsx'
import HandlerError from './containers/error-handler/index.jsx'
import HomePage from './pages/home/index.jsx'
import ShopPage from './pages/shop/index.jsx'
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <HandlerError>
    <Header />
    <Switch>  
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  </HandlerError>
)

export default App
