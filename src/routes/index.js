import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/home'
import Quiz from '../pages/quiz'
import Stat from '../pages/stat'
import About from '../pages/about'

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/quiz" component={Quiz} />
    <Route path="/stat" component={Stat} />
    <Route path="/about" component={About} />
  </div>
)
