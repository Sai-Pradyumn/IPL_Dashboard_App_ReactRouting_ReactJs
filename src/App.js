// App.js
import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
    <Route
      path={`${process.env.PUBLIC_URL}/team-matches/:id`}
      component={TeamMatches}
    />
    <Route component={NotFound} />
  </Switch>
)

export default App
