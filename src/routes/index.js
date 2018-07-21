import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Stat from '../pages/Stat'
import About from '../pages/About'

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/quiz" component={Quiz} />
    <Route path="/quiz/:id" component={Quiz} />
    <Route path="/stat" component={Stat} />
    <Route path="/about" component={About} />
  </div>
)
