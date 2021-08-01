import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import AdminControl from './Components/Dashboard/AdminControl/AdminControl';
import Login from './Components/Login/Login';
import AdminAddService from './Components/Dashboard/AdminAddService/AdminAddService';
import AdminMaker from './Components/Dashboard/AdminMaker/AdminMaker';
import OrderService from './Components/Dashboard/OrderService/OrderService';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Review from './Components/Dashboard/Review/Review';
import Contact from './Components/Contact/Contact';
import ClientReview from './Components/ClientReview/ClientReview';
import Service from './Components/Service/Service';
import ProcessPayment from './Components/Home/ProcessPayment/ProcessPayment';

export const UserContext = createContext();

function App() {
  const [admin, setAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    fetch(`https://lit-ocean-57294.herokuapp.com/findAdmin/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data);
            // setRedirect(true)
        })
}, [loggedInUser.email]);

  
  console.log(loggedInUser);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" >
                <Home></Home>
              </Route>
              <Route path="/home" >
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/service">
                <Service></Service>
              </Route>
              <Route path="/clientreview">
                <ClientReview></ClientReview>
              </Route>
              <PrivateRoute path="/admin_user" >
                {admin ? <AdminControl></AdminControl> : <ServiceList></ServiceList>}
              </PrivateRoute>
              
              {admin ? <div> 
              <PrivateRoute path="/dashboard/:serviceLink">
                <AdminControl></AdminControl>
              </PrivateRoute>
              <PrivateRoute path="/adminControl" >
                <AdminControl></AdminControl>
              </PrivateRoute>
              <PrivateRoute path="/adminAddService">
                <AdminAddService></AdminAddService>
              </PrivateRoute>
              <PrivateRoute path="/adminMaker">
                <AdminMaker></AdminMaker>
              </PrivateRoute> </div> :

              <div>
              <PrivateRoute path="/dashboard/:serviceLink">
                <OrderService></OrderService>
              </PrivateRoute>
              <PrivateRoute path="/orderService" >
                <OrderService></OrderService>
              </PrivateRoute>
              <PrivateRoute path="/userService" >
                <ServiceList></ServiceList>
              </PrivateRoute>
              <PrivateRoute path="/userReview" >
                <Review></Review>
              </PrivateRoute>
              <PrivateRoute path="/payment" >
                <ProcessPayment/>
              </PrivateRoute>
              </div>}

            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
