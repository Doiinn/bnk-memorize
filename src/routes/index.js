import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/home'

const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

export default () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Post} />
        <Route path="/projects" component={Project} />
    </div>
)