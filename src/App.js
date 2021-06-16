import Header from './components/Header';
import Home from './components/Home';
import { Router } from '@reach/router'; // npm i @reach/router
import Footer from './components/Footer';
import Counter from './components/Counter';
import Meal from './components/Meal';
import Meals from './components/Meals';
import './components/header.scss';



function App() {
  return (
<div className="App">

  <Router>
  <Meal path="/"/>
  <Meals path="/:category"/>
  </Router>
   
    <Counter/>
    <Header/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
