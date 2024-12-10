// import React from "react";
// import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
// import {Link} from 'react-router-dom'

// function DefaultLayout(props) {
//     const user = JSON.parse(localStorage.getItem('user'))
//   const menu = (
//     <Menu>
//         <Menu.Item>
//         <a
         
//           href="/"
//         >
//           Home
//         </a>
//       </Menu.Item>
//       <Menu.Item>
//         <a
         
//           href="/Home"
//         >
//           Book Now
//         </a>
//       </Menu.Item>
//       <Menu.Item>
//         <a
          
//           href="/userbookings"
//         >
//           Bookings
//         </a>
//       </Menu.Item>
//       <Menu.Item>
//         <a
         
//           href="/admin"
//         >
//           Admin
//         </a>
//       </Menu.Item>
//       <Menu.Item>
//         <a
         
//           href="/contact"
//         >
//           Contact us
//         </a>
//       </Menu.Item>
      
//       <Menu.Item onClick={()=>{
//           localStorage.removeItem('user');
//           window.location.href='/login'
//       }}>
//           <li style={{color:'orangered'}}>Logout</li>
//       </Menu.Item>
//     </Menu>
//   );
//   return (
//     <div>
//       <div className="header bs1">
//           <Row gutter={16} justify='center'>
//               <Col lg={20} sm={24} xs={24}>
//               <div className="d-flex justify-content-between">
//              <h1 ><b><Link to='/' style={{color:'orangered'}}>Cabventure</Link></b></h1>

//           <Dropdown overlay={menu} placement="bottomCenter">
//             <Button>{user.username}</Button>
//           </Dropdown>
//         </div>
//               </Col>
//           </Row>
        
//       </div>
//       <div className="content">{props.children}</div>

//       <div className="footer text-center">
//       <hr />

//            <p>Desinged and Developed By</p>

           

//            <p>Team Cabventure</p>
          
//       </div>
//     </div>
//   );
// }

// export default DefaultLayout;

import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import { Link } from 'react-router-dom';

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'));
    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/Home">Book Now</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/userbookings">Bookings</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/admin">Admin</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/contact">Contact us</Link>
            </Menu.Item>
            <Menu.Item onClick={() => {
                localStorage.removeItem('user');
                window.location.href = '/login';
            }}>
                <span style={{ color: 'orangered' }}>Logout</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <div className="header bs1">
                <Row gutter={16} justify='center'>
                    <Col lg={20} sm={24} xs={24}>
                        <div className="d-flex justify-content-between">
                            <h1><b><Link to='/' style={{ color: 'orangered' }}>Cabventure</Link></b></h1>

                            {user ? (
                                <Dropdown overlay={menu} placement="bottomCenter">
                                    <Button>{user.username}</Button>
                                </Dropdown>
                            ) : (
                                <Button><Link to="/login">Login</Link></Button>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="content">{props.children}</div>

            <div className="footer text-center">
                <hr />
                <p>Designed and Developed By</p>
                <p>Team Cabventure</p>
            </div>
        </div>
    );
}

export default DefaultLayout;
