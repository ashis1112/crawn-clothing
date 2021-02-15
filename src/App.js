import './App.css'
import React from 'react'
import Homepage from './pages/homepage/homepage'
import Shoppage from './pages/shop/shop'
import Header from './component/header/header'
import Signinandsignup from './pages/signin-and-signup/signin-and-signup'

import {Route,Switch} from 'react-router-dom'
import {auth,createUserProfile} from './firebase/firebase.utils'

class  App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
unsubscribefromauth=null
componentDidMount(){
  this.unsubscribefromauth=auth.onAuthStateChanged(async(user)=>{
    /* after google signin user object passing to createUserProfile() to store data in data base*/ 
    createUserProfile(user)
  })

}
componentWillUnmount(){
  this.unsubscribefromauth()
}

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
          <Route exact path="/signin" component={Signinandsignup} />
        </Switch>
  
      </div>
    );
  }
}

export default App;
