import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Layout from '../src/css-grid/layout/Layout'
import Tumblr from '../src/css-grid/tumblr-layout/Tumblr'

require('./app.scss');

function App () {
  return (
    <div className='App'>
      <nav className='navigation'>
        <h1>All components</h1>
        <ul>
          <li>
            <Link to='/layout'>Layout</Link>
          </li>
          <li>
            <Link to='/tumblr'>Tumblr</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/layout' component={Layout} />
        <Route path='/tumblr' component={Tumblr} />
      </Switch>
    </div>
  )
}

export default App
