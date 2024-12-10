// import React, { useState } from "react";
//  import Back from './Back.js';
// import axios from "axios";
// //  import "./contact.css";
//  import DefaultLayout from "../components/DefaultLayout";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5001/send', formData);
//       if (response.status === 200) {
//         alert('Message sent successfully');
//         setFormData({
//           name: '',
//           email: '',
//           subject: '',
//           message: ''
//         });
//       }
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error.message);
//       alert('Failed to send message: ' + (error.response ? error.response.data : error.message));
//     }
//   };

//   const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1749717999965!2d76.65720287502893!3d30.51609109607139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1716473901273!5m2!1sen!2sin';

//   return (
//     <DefaultLayout>
//     <>
//       <Back title='Contact us' />
//       <section className='contacts padding'>
//         <div className='container shadow flexSB'>
//           <div className='left row'>
//             <iframe
//               src={map}
//               width="600"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//           <div className='right row'>
//             <h1>Contact us</h1>
//             <p>We're open for any suggestion or just to have a chat</p>

//             <div className='items grid2'>
//               <div className='box'>
//                 <h4>ADDRESS:</h4>
//                 <p>Chitkara University, Patiala</p>
//               </div>
//               <div className='box'>
//                 <h4>EMAIL:</h4>
//                 <p>CabVenture@gmail.com</p>
//               </div>
//               <div className='box'>
//                 <h4>PHONE:</h4>
//                 <p>+91 9871234560</p>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className='flexSB'>
//                 <input
//                   type='text'
//                   name='name'
//                   placeholder='Name'
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type='email'
//                   name='email'
//                   placeholder='Email'
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <input
//                 type='text'
//                 name='subject'
//                 placeholder='Subject'
//                 value={formData.subject}
//                 onChange={handleChange}
//               />
//               <textarea
//                 name='message'
//                 cols='30'
//                 rows='10'
//                 placeholder='Create a message here...'
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//               <button className='primary-btn' type='submit'>SEND MESSAGE</button>
//             </form>

//             <h3>Follow us here</h3>
//             <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
//           </div>
//         </div>
//       </section>
//     </>
//     </DefaultLayout>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/send', formData);
      if (response.status === 200) {
        alert('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Failed to send message: ' + (error.response ? error.response.data : error.message));
    }
  };

  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1749717999965!2d76.65720287502893!3d30.51609109607139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1716473901273!5m2!1sen!2sin';

  return (
    <DefaultLayout>
    <>
      <style>
        {`
          .contacts {
            padding: 50px 0;
          }
          
          .container {
            display: flex;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .left {
            flex: 1;
          }
          
          .right {
            flex: 1;
            padding: 0 20px;
          }
          
          h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }
          
          p {
            font-size: 1.1rem;
            margin-bottom: 30px;
          }
          
          .box h4 {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }
          
          form {
            margin-bottom: 30px;
          }
          
          form input,
          form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          
          form textarea {
            resize: vertical;
          }
          
          form button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          
          form button:hover {
            background-color: #0056b3;
          }
          
          .social-links {
            font-size: 1.2rem;
            margin-top: 20px;
          }
        `}
      </style>
      
      
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe
              src={map}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Chitkara University, Patiala</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>CabVenture@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+91 9871234560</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name='message'
                cols='30'
                rows='10'
                placeholder='Create a message here...'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button className='primary-btn' type='submit'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span className='social-links'>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
 </DefaultLayout>   
  );
};

export default Contact;