import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './views/Home'
import Error from './views/Error'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/404">
            <Error />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
