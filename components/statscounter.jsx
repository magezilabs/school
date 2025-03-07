"use client"
// components/StatsCounter.js
import { useEffect, useState } from 'react';

const StatsCounter = () => {
  const [parents, setParents] = useState(0);
  const [students, setStudents] = useState(0);

  const animateValue = (start, end, duration, setter) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    if (typeof window !== 'undefined') {
      requestAnimationFrame(step);
    }
  };

  useEffect(() => {
    animateValue(0, 1000, 30000, setParents);
    animateValue(0, 15000, 40000, setStudents);
  }, []);

  return (
    <div className="stats-container">
      <div className="stat-item">
        <p className="stat-number">{parents.toLocaleString()}</p>
        <p className="stat-text">Proud Parents Joined</p>
      </div>
      <div className="stat-item">
        <p className="stat-number">{students.toLocaleString()}</p>
        <p className="stat-text">Students Enrolled</p>
      </div>
    </div>
  );
};

export default StatsCounter;
