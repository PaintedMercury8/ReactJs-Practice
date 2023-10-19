import {Switch, Route, Redirect} from 'react-router-dom'

import About from './components/About/index'
import Home from './components/Home/index'
import NotFound from './components/NotFound'
import Header from './components/Header'

import './App.css'

const App = () => (
  <div className="main-container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
