import React, { useState, useEffect, useContext } from 'react';
import './History.css';
import { userContext } from '../context/userContext';
import BenzImage from '../images/cars-big/benz.jpg'; // Import the image
import HeroPages from "../components/HeroPages";
import { ToastContainer } from 'react-toastify';
import Loader from "../components/Loader";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const BookingHistory = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(userContext);
    const token = currentUser?.token;
    // Sample data with integrated owner information and image paths
    const initialBookingHistory = [
        {
            id: 1,
            brand: 'Mercedes-Benz',
            model: 'E-Class',
            year: 2023,
            color: 'Black',
            price: '$50,000',
            owner: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                mobile: '+1 123 456 7890',
                address: '123 Main Street, Anytown, USA'
            },
            pickup: 'Downtown',
            dropoff: 'Airport',
            image: BenzImage // Import image path
        },
        {
            id: 2,
            brand: 'BMW',
            model: 'X5',
            year: 2022,
            color: 'White',
            price: '$60,000',
            owner: {
                name: 'Jane Smith',
                email: 'jane.smith@example.com',
                mobile: '+1 234 567 8901',
                address: '456 Elm Street, Anytown, USA'
            },
            pickup: 'Suburb',
            dropoff: 'City Center',
            image: BenzImage // Import image path
        }
        // Add more car objects as needed
    ];

    const [isLoading, setIsLoading] = useState(false);
    const [bookingHistory, setBookingHistory] = useState(initialBookingHistory);
    const [ownerData, setOwnerData] = useState([]);
    const [carData, setCarData] = useState([]);

    const removeBooking = (id) => {
        setBookingHistory(bookingHistory.filter(booking => booking.id !== id));
    };

    useEffect(() => {
        if (!token) navigate('/');
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}booking/getUserBooking`, { headers: { 'Authorization': `Bearer ${token}` } })
                if (response.data) {
                    const carRes = await axios.get(`${process.env.REACT_APP_BASE_URL}cars/${response.data.car}`)
                    if (carRes.data)
                        setCarData(carRes.data)
                    setBookingHistory(response.data);
                }
            } catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
            fetchData();
        }
    }, [])
    if (isLoading) return <Loader />
    return (
        <div>

            <HeroPages name="Booking History" />
            <div className="booking-history-container">
                {bookingHistory.map((booking) => (
                    <div key={booking._id} className="booking-item">
                        <div className="booking-details">
                            {/* Car Component */}
                            <p><strong>Brand:</strong> {booking.brand}</p>
                            <p><strong>Model:</strong> {booking.model}</p>
                            <p><strong>Year:</strong> {booking.year}</p>
                            <p><strong>Color:</strong> {booking.color}</p>
                            <p><strong>Price:</strong> {booking.price}</p>

                            {/* This is only we have in booking */}
                            <p><strong>Pickup Date & Time:</strong> Mon Jul 01 2024 09:00:00 GMT+0530 (India Standard Time)</p>
                            <p><strong>DropOff Date & Time:</strong> Fri Jul 05 2024 18:00:00 GMT+0530 (India Standard Time)</p>
                        </div>
                        <div className="car-image">
                            <img src={booking.image} alt={`${booking.brand} ${booking.model}`} />
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookingHistory;
