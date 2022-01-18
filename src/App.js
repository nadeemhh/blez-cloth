import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Homepage from './pages/homepages/homepage.component';
import Shoppage from './pages/shop/shop-component';
import Header from './component/header.component/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import {auth,createuserprofiledocument} from './firebase/firebase.utiles';
import {setCurrentUser} from './redux/user/user-action';
import { selectCurrentUser } from './redux/user/user.selectors';
import Pratics from './component/practic/pars';
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component{

unsubscribeFromAuth=null


componentDidMount(){
const {setCurrentUser} = this.props;


  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

  if(userAuth){
    const userRef = await createuserprofiledocument(userAuth);

userRef.onSnapshot(snapshot=>{
  setCurrentUser({
      id:snapshot.id,
      ...snapshot.data()
    })
} );


  }

  else{setCurrentUser(userAuth)}
   // createuserprofiledocument(user)
   // this.setState({currentUser:user});
    
  })
}


componentWillUnmount(){
  this.unsubscribeFromAuth()
}

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shoppage}/>
     <Route exact path='/checkout' component={CheckoutPage} /> 
        <Route exact path='/signin' render={()=>
          this.props.currentUser ?(<Redirect to='/' />) : (<SignInSignUp />)}/>
          <Route path='/prac' component={Pratics}/>
        </Switch>
      
      </div>
    )
  };
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => {
  
  return({
  setCurrentUser : user =>  dispatch(setCurrentUser(user))
})};

export default connect(mapStateToProps,mapDispatchToProps)(App);

