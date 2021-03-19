import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signInSignUp/signInSignUp.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
