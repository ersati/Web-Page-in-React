import React from 'react'
import '../style/header.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import {Route, Switch} from 'react-router-dom'




const Header = () => {

  const images= [img1, img2, img3, img4]
  const index = Math.floor(Math.random() * 4)
  const img = images[index]
  return (
  <header>
    <Switch>
    <Route path='/' exact render={() => (<img src={img1} alt='nature'/>)}/>
    <Route path='/products' render={() => (<img src={img2} alt='nature'/>)}/>
    <Route path='/contact' render={() => (<img src={img3} alt='nature'/>)}/>
    <Route path='/login' render={() => (<img src={img4} alt='nature'/>)}/>
    <Route path='/admin' render={() => (<img src={img4} alt='nature'/>)}/>
    <Route  render={() => (<img src={img} alt='nature'/>)}/>
    </Switch>
    </header>
    )
};

export default Header;
