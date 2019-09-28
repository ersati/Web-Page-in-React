import React, {Component} from "react";
import "../style/App.css";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from './Footer'
import Navigation from "./Navigation";
import Header from './Header'
import Page from './Page'
class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Header/>
           <main>
            <Navigation/>
            <Page/>
           </main>
          
          <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;
