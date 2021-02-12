import './App.css'
import Homepage from './pages/homepage/homepage'
import Shoppage from './pages/shop/shop'

import {Route,Switch} from 'react-router-dom'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shoppage} />
      </Switch>

    </div>
  );
}

export default App;
