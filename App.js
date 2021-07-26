import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Home() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <h1>ABOUT</h1>
          </Route>
          <Route path="/users">
            <h1>USERS</h1>
          </Route>
          <Route path="/">
            <h1>HOMEPAGE</h1>
          </Route>
        </Switch>
    </Router>
  )
}

export default Home
