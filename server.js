// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = process.env.PORT || 5000;
// const dbConnection = require('./db'); // This imports and connects to the remote MongoDB
// app.use(express.json());

// // Create a new Mongoose instance for local MongoDB logging
// const localMongoose = new mongoose.Mongoose();
// localMongoose.connect('mongodb://localhost:27017/loggingDB', { useUnifiedTopology: true, useNewUrlParser: true });

// const localConnection = localMongoose.connection;

// localConnection.on('connected', () => {
//     console.log('Local Mongo DB Connection Successful');
// });

// localConnection.on('error', (error) => {
//     console.log('Local Mongo DB Connection Error:', error);
// });

// // Define a schema and model for logging requests
// const requestLogSchema = new mongoose.Schema({
//     method: String,
//     url: String,
//     body: Object,
//     timestamp: { type: Date, default: Date.now }
// });

// const RequestLog = localMongoose.model('RequestLog', requestLogSchema);

// // Middleware to log all requests to the local MongoDB
// app.use((req, res, next) => {
//     const logEntry = new RequestLog({
//         method: req.method,
//         url: req.url,
//         body: req.body
//     });

//     logEntry.save((err) => {
//         if (err) {
//             console.error('Error logging request:', err);
//         }
//     });

//     next();
// });

// app.use('/api/cars/', require('./routes/carsRoute'));
// app.use('/api/users/', require('./routes/usersRoute'));
// app.use('/api/bookings/', require('./routes/bookingsRoute'));

// const path = require('path');

// if (process.env.NODE_ENV === 'production') {
//     app.use('/', express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
//     });
// }

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Node JS Server Started on Port ${port}`));

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')
app.use(express.json())

app.use('/api/cars/' , require('./routes/carsRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute'))


const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))


 


app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))