import Homepage from './pages/homepage/homepage'
import {Route,Switch} from 'react-router-dom'

const Hatspage=()=>(
  <div>
    <h1>It is hats</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hatspage} />
      </Switch>

    </div>
  );
}

export default App;
