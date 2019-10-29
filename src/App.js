import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './App.css'
import 'typeface-roboto'
import Home from './views/Home'
import SingleCard from './views/SingleCard'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/card/:id' component={SingleCard} />
        <Route path='/card'>
          <Redirect to='/' />
        </Route>
        <Route path='*'>404</Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
