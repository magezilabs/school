// components/ComparisonSection.js
import React from 'react';
import { FaSchool, FaTrophy, FaMoneyBillWave, FaUsers } from 'react-icons/fa';

const ComparisonSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Our School?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaTrophy className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Excellent Performance</h3>
          <p className="text-lg">Our students consistently outperform others in academics and extracurricular activities.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaMoneyBillWave className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Affordable Fees</h3>
          <p className="text-lg">We offer a favorable fee structure that provides great value for top-notch education.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Diverse Community</h3>
          <p className="text-lg">Our school fosters a diverse and inclusive environment for all students.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaSchool className="text-4xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">State-of-the-Art Facilities</h3>
          <p className="text-lg">We boast modern facilities that support academic and extracurricular excellence.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaUsers className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Supportive Staff</h3>
          <p className="text-lg">Our dedicated staff are committed to the success and well-being of every student.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaMoneyBillWave className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Scholarship Opportunities</h3>
          <p className="text-lg">We offer various scholarships to support talented students and those in need.</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
