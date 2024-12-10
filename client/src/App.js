// import logo from './logo.svg';
// import './App.css';
// import {Route , BrowserRouter , Redirect} from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import BookingCar from './pages/BookingCar'
// import 'antd/dist/antd.css';
// import UserBookings from './pages/UserBookings';
// import AddCar from './pages/AddCar';
// import AdminHome from './pages/AdminHome';
// import EditCar from './pages/EditCar';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <div className="App">

         
         
//          <BrowserRouter>
             
//              <ProtectedRoute path='/' exact component={Home} />
//              <Route path='/login' exact component={Login} />
//              <Route path='/register' exact component={Register} />
//              <ProtectedRoute path='/booking/:carid' exact component={BookingCar} />
//              <ProtectedRoute path='/userbookings' exact component={UserBookings} />
//              <ProtectedRoute path='/addcar' exact component={AddCar} />
//              <ProtectedRoute path='/editcar/:carid' exact component={EditCar} />
//              <ProtectedRoute path='/admin' exact component={AdminHome} />
//              <Route path='/contact' exact component={Contact} />
         
//          </BrowserRouter>

//     </div>
//   );
// }



// export default App;


// export function ProtectedRoute(props)
// {


//     if(localStorage.getItem('user'))
//     {
//       return <Route {...props}/>
//     }
//     else{
//       return <Redirect to='/login'/>
//     }

// }

// App.js

import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import Landing from './pages/CabVentureLanding';
import contact from './pages/contact';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Route path='/' exact component={Landing} />
                <ProtectedRoute path='/Home' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <ProtectedRoute path='/booking/:carid' exact component={BookingCar} />
                <ProtectedRoute path='/userbookings' exact component={UserBookings} />
                <ProtectedRoute path='/addcar' exact component={AddCar} />
                <ProtectedRoute path='/editcar/:carid' exact component={EditCar} />
                <ProtectedRoute path='/admin' exact component={AdminHome} />
                <Route path='/contact' exact component={contact} />
                
            </BrowserRouter>
        </div>
    );
}

export default App;

export function ProtectedRoute({ component: Component, ...rest }) {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    return (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem('user') ? (
                    isAdmin ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to='/' />
                    )
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    );
}
