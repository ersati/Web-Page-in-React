import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const permission = false
const LoginPage = () => {
    return (
        <Route render={() =>(
            permission ? (<h3>Welcome to Admin Panel</h3>) : (<Redirect to='admin'/>)
        )}/>
      );
}
 
export default LoginPage;