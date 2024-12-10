// // const express = require("express");
// // const router = express.Router();
// // const Booking = require("../models/bookingModel");
// // const Car = require("../models/carModel");
// // const { v4: uuidv4 } = require("uuid");
// // const stripe = require("stripe")(
// //   "sk_test_51IYnC0SIR2AbPxU0EiMx1fTwzbZXLbkaOcbc2cXx49528d9TGkQVjUINJfUDAnQMVaBFfBDP5xtcHCkZG1n1V3E800U7qXFmGf"
// // );
// // router.post("/bookcar", async (req, res) => {
// //   const { token } = req.body;
// //   try {
// //     const customer = await stripe.customers.create({
// //       email: token.email,
// //       source: token.id,
// //     });

// //     const payment = await stripe.charges.create(
// //       {
// //         amount: req.body.totalAmount * 100,
// //         currency: "inr",
// //         customer: customer.id,
// //         receipt_email: token.email
// //       },
// //       {
// //         idempotencyKey: uuidv4(),
        
// //       }
// //     );

// //     if (payment) {
// //       req.body.transactionId = payment.source.id;
// //       const newbooking = new Booking(req.body);
// //       await newbooking.save();
// //       const car = await Car.findOne({ _id: req.body.car });
// //       console.log(req.body.car);
// //       car.bookedTimeSlots.push(req.body.bookedTimeSlots);

// //       await car.save();
// //       res.send("Your booking is successfull");
// //     } else {
// //       return res.status(400).json(error);
// //     }
// //   } catch (error) {
// //     console.log(error);
// //     return res.status(400).json(error);
// //   }
// // });


// // router.get("/getallbookings", async(req, res) => {

// //     try {

// //         const bookings = await Booking.find().populate('car')
// //         res.send(bookings)
        
// //     } catch (error) {
// //         return res.status(400).json(error);
// //     }
  
// // });


// // module.exports = router;

// // backend/routes/bookingsRoute.js

// const express = require('express');
// const router = express.Router();
// const Booking = require('../models/bookingModel');

// router.post('/cancel', async (req, res) => {
//   try {
//     const booking = await Booking.findById(req.body.bookingId);
//     if (booking) {
//       await Booking.findByIdAndDelete(req.body.bookingId);
//       res.send('Booking cancelled successfully');
//     } else {
//       res.status(404).send('Booking not found');
//     }
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// router.post('/edit', async (req, res) => {
//   try {
//     const { bookingId, newDetails } = req.body;
//     const booking = await Booking.findById(bookingId);
//     if (booking) {
//       booking.totalHours = newDetails.totalHours;
//       booking.bookedTimeSlots = newDetails.bookedTimeSlots;
//       await booking.save();
//       res.send('Booking edited successfully');
//     } else {
//       res.status(404).send('Booking not found');
//     }
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51IYnC0SIR2AbPxU0EiMx1fTwzbZXLbkaOcbc2cXx49528d9TGkQVjUINJfUDAnQMVaBFfBDP5xtcHCkZG1n1V3E800U7qXFmGf"
);
router.post("/bookcar", async (req, res) => {
  const { token } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email
      },
      {
        idempotencyKey: uuidv4(),
        
      }
    );

    if (payment) {
      req.body.transactionId = payment.source.id;
      const newbooking = new Booking(req.body);
      await newbooking.save();
      const car = await Car.findOne({ _id: req.body.car });
      console.log(req.body.car);
      car.bookedTimeSlots.push(req.body.bookedTimeSlots);

      await car.save();
      res.send("Your booking is successfull");
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});


router.get("/getallbookings", async(req, res) => {

    try {

        const bookings = await Booking.find().populate('car')
        res.send(bookings)
        
    } catch (error) {
        return res.status(400).json(error);
    }
  
});


module.exports = router;
