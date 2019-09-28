import React from 'react'
import '../style/navigation.css'
import { NavLink } from 'react-router-dom';

const lists = [
  {name: 'Home', path: '/', exact: true},
  {name: 'Products', path: '/products'},
  {name: 'Contact', path: '/contact'},
  {name: 'Login', path: '/login'},
  

]

const Navigation = () => {
                                                                                   
  const menu = lists.map((list) => (
    <li key={list.name}><NavLink to={list.path} exact={list.exact ? list.exact : false}>{list.name}</NavLink></li>  
  ))
//   <Switch>
//   <Route exact path="/" component={Home} />
//   <Route path="/products" component={Products} />
//   <Route path="/contact" component={Contact} />
// </Switch>
  return<nav className='main'>
    <ul>
      {/* <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/products'>Products</NavLink></li>
      <li><NavLink to='/contact'>Contakt</NavLink></li>
      <li><NavLink to='login'>Login</NavLink></li> */}
      {menu}
    </ul>

   
    </nav>
  
};

export default Navigation;
