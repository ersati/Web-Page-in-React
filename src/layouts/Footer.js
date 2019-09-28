import React from 'react'
import {Route} from 'react-router-dom'
const Footer = () => {
  return <footer>
    <>
    <h2>Footer</h2>

    <Route path='/' exact render={() => (
      <p>You are on <span>Main Page</span></p>
    )}/>

<Route path='/:page' exact render={(props) => {console.log(props) 
return(
  <>
  
      <p>You are on <span>{props.match.params.page}</span></p>
      <p>You are on <span>{props.match.url}</span></p>
      <p>You are on <span>{props.match.path}</span></p>
      </>
    )}}/>

<Route path='/:page/:id' exact render={(props) => (
  <>
      <p>You are on <span>{props.match.params.id}</span></p>
      <p>You are on <span>{props.match.url}</span></p>
      <p>You are on <span>{props.match.path}</span></p>
      </>
    )}/>
    </>
    </footer>
};

export default Footer;
