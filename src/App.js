import './App.css';
import React from 'react'
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom'
import Home from './Views/Home'
import Favorite from './Views/Favorite'
import NotFound from './Views/NotFound404'
import Detail from './Views/Detail'
import Navbar from './Components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <div className="app" style={{minHeight: "100vh", backgroundColor: "lightgray"}}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorite" component={Favorite} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
