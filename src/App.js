import './App.css'
import Homepage from './pages/homepage/homepage'
import Shoppage from './pages/shop/shop'
import Header from './component/header/header'

import {Route,Switch} from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shoppage} />
      </Switch>

    </div>
  );
}

export default App;
