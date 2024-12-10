// import React, { useState, useEffect } from "react";
// import DefaultLayout from "../components/DefaultLayout";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllBookings } from "../redux/actions/bookingActions";
// import { Col, Row } from "antd";
// import Spinner from '../components/Spinner';
// import moment from "moment";
// function UserBookings() {
//   const dispatch = useDispatch();
//   const { bookings } = useSelector((state) => state.bookingsReducer);
//   const {loading} = useSelector((state) => state.alertsReducer);
//   const user = JSON.parse(localStorage.getItem("user"));
//   useEffect(() => {
//     dispatch(getAllBookings());
//   }, []);

//   return (
//     <DefaultLayout>
//         {loading && (<Spinner />)}
//       <h3 className="text-center mt-2">My Bookings</h3>
    
//       <Row justify="center" gutter={16}>
//         <Col lg={16} sm={24}>
         
//             {bookings.filter(o=>o.user==user._id).map((booking) => {
//              return <Row gutter={16} className="bs1 mt-3 text-left">
//                 <Col lg={6} sm={24}>
//                     <p><b>{booking.car.name}</b></p>
//                     <p>Total hours : <b>{booking.totalHours}</b></p>
//                     <p>Rent per hour : <b>{booking.car.rentPerHour}</b></p>
//                     <p>Total amount : <b>{booking.totalAmount}</b></p>
//                 </Col>

//                 <Col lg={12} sm={24}>
//                 <p>Transaction Id : <b>{booking.transactionId}</b></p>
//                 <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
//                 <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
//                 <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
//                 </Col>

//                 <Col lg={6} sm={24} className='text-right'>
//                     <img style={{borderRadius:5}} src={booking.car.image}  height="140" className="p-2"/>
//                 </Col>
//               </Row>;
//             })}
          
//         </Col>
//       </Row>
//     </DefaultLayout>
//   );
// }

// export default UserBookings;

import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row, Button, Modal, Form, DatePicker, InputNumber } from "antd";
import Spinner from '../components/Spinner';
import moment from "moment";

function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [userBookings, setUserBookings] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  useEffect(() => {
    if (bookings) {
      setUserBookings(bookings.filter(o => o.user === user._id));
    }
  }, [bookings, user._id]);

  const showEditModal = (booking) => {
    setCurrentBooking(booking);
    setIsModalVisible(true);
    form.setFieldsValue({
      from: moment(booking.bookedTimeSlots.from),
      to: moment(booking.bookedTimeSlots.to),
      totalHours: booking.totalHours,
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = (values) => {
    const newBookings = userBookings.map((booking) => {
      if (booking._id === currentBooking._id) {
        return {
          ...booking,
          bookedTimeSlots: {
            from: values.from.format("YYYY-MM-DD HH:mm:ss"),
            to: values.to.format("YYYY-MM-DD HH:mm:ss"),
          },
          totalHours: values.totalHours,
        };
      }
      return booking;
    });
    setUserBookings(newBookings);
    setIsModalVisible(false);
  };

  const handleDelete = (bookingId) => {
    setUserBookings(userBookings.filter(booking => booking._id !== bookingId));
  };

  const disabledDate = (current) => {
    return current && current < moment().endOf('day');
  };

  const calculateTotalHours = (from, to) => {
    return to.diff(from, 'hours', true); // True to get fractional hours
  };

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <h3 className="text-center mt-2">My Bookings</h3>

      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
          {userBookings.map((booking) => (
            <Row gutter={16} className="bs1 mt-3 text-left" key={booking._id}>
              <Col lg={6} sm={24}>
                <p><b>{booking.car.name}</b></p>
                <p>Total hours : <b>{booking.totalHours}</b></p>
                <p>Rent per hour : <b>{booking.car.rentPerHour}</b></p>
                <p>Total amount : <b>{booking.totalAmount}</b></p>
              </Col>

              <Col lg={12} sm={24}>
                <p>Transaction Id : <b>{booking.transactionId}</b></p>
                <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
              </Col>

              <Col lg={6} sm={24} className='text-right'>
                <img style={{ borderRadius: 5 }} src={booking.car.image} height="140" className="p-2" alt="car" />
              </Col>

              <Col lg={24} sm={24} className='text-right'>
                <Button type="primary" className="mr-2" onClick={() => showEditModal(booking)}>Edit Trip</Button>
                <Button type="danger" onClick={() => handleDelete(booking._id)}>Cancel Trip</Button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>

      {currentBooking && (
        <Modal title="Edit Booking" visible={isModalVisible} onCancel={handleCancel} footer={null}>
          <Form
            layout="vertical"
            onFinish={handleEdit}
            form={form}
            onValuesChange={(changedValues, allValues) => {
              if (allValues.from && allValues.to) {
                const totalHours = calculateTotalHours(allValues.from, allValues.to);
                form.setFieldsValue({ totalHours });
              }
            }}
          >
            <Form.Item
              name="from"
              label="From"
              rules={[{ required: true, message: 'Please select the start time!' }]}
            >
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" disabledDate={disabledDate} />
            </Form.Item>
            <Form.Item
              name="to"
              label="To"
              dependencies={['from']}
              rules={[
                { required: true, message: 'Please select the end time!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('from') < value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The end time must be after the start time!'));
                  },
                }),
              ]}
            >
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" disabledDate={disabledDate} />
            </Form.Item>
            <Form.Item
              name="totalHours"
              label="Total Hours"
            >
              <InputNumber readOnly />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </DefaultLayout>
  );
}

export default UserBookings;
