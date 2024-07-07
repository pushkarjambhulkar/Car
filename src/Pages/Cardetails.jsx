import React from 'react';
import { FaCheckCircle, FaUser, FaCar, FaGasPump, FaCalendarAlt, FaTachometerAlt, FaSnowflake, FaCog, FaCalendarCheck, FaMoneyBillWave, FaShieldAlt, FaExclamationTriangle, FaInfoCircle, FaStar, FaPhone, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import './cardetails.css';
import carImage from '../images/cars-big/audia1.jpg'; // Adjust the path as needed
import ownerImage from '../images/cars-big/th.jpeg'; // Adjust the path as needed

const CarDetailsPage = () => {
  const carDetails = {
    modelName: "Creta Hyundai",
    year: "Economy",
    color: "White",
    price: "$250",
    mileage: "30,000 km",
    name: "Creta Hyundai",
    doors: "4",
    air: "Air Conditioning",
    transmission: "Automatic",
    fuel: "Petrol",
    owner: {
      name: "John Doe",
      phone: "+1234567890",
      email: "john.doe@example.com",
      rating: 4.5,
    },
  };

  const goBack = () => {
    // Implement your go back logic here, e.g., history.goBack()
    console.log("Go back clicked");
  };

  return (
    <div className="car-details-container">
      <div className="go-back">
        <FaArrowLeft onClick={goBack} />
      </div>
      <div className="car-card">
        <div className="car-image-container">
          <img src={carImage} alt="Creta Hyundai" className="car-image" />
        </div>
        <div className="car-details-content">
          <h2><FaCar /> {carDetails.modelName} <span className="car-category">{carDetails.year}</span></h2>
          <div className="car-details">
            <div className="car-detail-item"><FaUser /> 4 seats</div>
            <div className="car-detail-item"><FaCar /> {carDetails.doors} doors</div>
            <div className="car-detail-item"><FaTachometerAlt /> {carDetails.mileage}</div>
            <div className="car-detail-item"><FaGasPump /> {carDetails.fuel}</div>
            <div className="car-detail-item"><FaSnowflake /> {carDetails.air}</div>
            <div className="car-detail-item"><GiGearStickPattern /> {carDetails.transmission} Transmission</div>
            <div className="car-detail-item price"> ₹{carDetails.price}</div>
          </div>
          <div className="car-includes">
            {/* Add any additional details or features here */}
          </div>
        </div>
      </div>

      <div className="owner-card">
        <div className="owner-details-content">
          <h3>Owner Details</h3>
          <div className="owner-info">
            <div className="owner-detail-item"><FaUser /> {carDetails.owner.name}</div>
            <div className="owner-detail-item"><FaPhone /> {carDetails.owner.phone}</div>
            <div className="owner-detail-item"><FaEnvelope /> {carDetails.owner.email}</div>
            <div className="owner-detail-item"><FaStar /> {carDetails.owner.rating} Rating</div>
            <div className="book-now-container">
              <button className="book-now-button">Book Now</button>
            </div>
          </div>
        </div>
        <div className="owner-image-container">
          <img src={ownerImage} alt="Owner" className="owner-image" />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
