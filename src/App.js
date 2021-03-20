import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signInSignUp/signInSignUp.component';
import React from 'react';

import {auth,createUserDocument} from './firebase/firebase.utils';
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentuser :null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await  createUserDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState(
            {
              currentuser: {
                id: snapShot.id,
                ...snapShot.data()

            }
          });
          
        });
      }
     this.setState({currentuser :userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentuser={this.state.currentuser}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
    }
  
}

export default App;
