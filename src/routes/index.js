import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Stat from '../pages/Stat'
import About from '../pages/About'
import Quiz1 from '../pages/QuizList/1'

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/quiz" component={Quiz} />
    <Route path="/quiz/1" component={Quiz1} />
    <Route path="/stat" component={Stat} />
    <Route path="/about" component={About} />
  </div>
)
