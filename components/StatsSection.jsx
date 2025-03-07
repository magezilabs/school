// components/StatsSection.js
import React from 'react';
import { FaGraduationCap, FaBriefcase, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    { icon: <FaGraduationCap />, label: 'Graduates', value: '1,200' },
    { icon: <FaBriefcase />, label: 'Employed Graduates', value: '1,000' },
    { icon: <FaUsers />, label: 'Current Students', value: '800' },
    { icon: <FaChalkboardTeacher />, label: 'Faculty Members', value: '50' },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-2xl">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
