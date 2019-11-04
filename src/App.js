import React, { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/header/'
import HandlerError from './containers/error-handler/'
import HomePage from './pages/home/'
import ShopPage from './pages/shop/'
import AuthPage from './pages/auth/'
import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase/'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user))
  }, [currentUser])
  return (
    <HandlerError>
      <Header currentUser={currentUser}/>
      <Switch>  
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={AuthPage} />
      </Switch>
    </HandlerError>
  )
}

export default App
