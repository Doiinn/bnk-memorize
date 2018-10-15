import React from 'react'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import MyStat from '../pages/MyStat'
import About from '../pages/About'
import WhoIsShe from '../pages/QuizList/WhoIsShe'
import bnkgen1 from '../quiz-data/bnk-gen1'
import bnkgen2 from '../quiz-data/bnk-gen2'
import { Route, Switch } from 'react-router'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/quiz" component={Quiz} />
    <Route path="/quiz/1" render={(props) => <WhoIsShe gen='1' data={bnkgen1} {...props} /> } />
    <Route path="/quiz/2" render={(props) => <WhoIsShe gen='2' data={bnkgen2} {...props} /> } />
    <Route path="/mystat" component={MyStat} />
    <Route path="/about" component={About} />
  </Switch>
)
