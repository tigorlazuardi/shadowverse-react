import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './App.css'
import 'typeface-roboto'
import Home from './views/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
