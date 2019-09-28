import React from 'react'
import { Switch, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductListPage from '../pages/ProductListPage'
import ContactPage from '../pages/ContactPage'
import LoginPage from '../pages/LoginPage'
import ErrorPage from '../pages/ErrorPage'
import AdminPage from '../pages/AdminPage'
import ProductPage from '../pages/ProductPage';
const Page = () => {
  return<article>

 <Switch>
   <Route exact path="/" component={HomePage} />
   <Route path="/products" component={ProductListPage} />
   <Route path="/product/:id" component={ProductPage}/>
   <Route path="/contact" component={ContactPage} />
   <Route path="/login" component={LoginPage} />
   <Route path="/admin" component={AdminPage}/>
   <Route  component={ErrorPage} />
 </Switch>

  </article>
};

export default Page;
