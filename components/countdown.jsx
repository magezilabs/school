import React, { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null); // Initial state is null to avoid mismatch.

  useEffect(() => {
    const countDownDate = new Date("Mar 12, 2025 00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance > 0) {
        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      }
      return null; // Indicate that the countdown has ended.
    };

    // Set initial state after mounting
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="flex justify-center items-center my-2">
  <div className="text-center">
    {timeLeft ? (
      <span className="text-red-500 p-2 rounded-2xl text-base md:text-lg lg:text-x2">
        {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes}{" "}
        minutes {timeLeft.seconds} seconds remaining to the 100% Sponsored
        Bursary. 
        <a href="/enrol" className="enrolment-btn text-sm flex justify-center items-center p-2">Enroll Now</a>
      </span>
    ) : (
      <span className="text-xl p-1">EXPIRED</span>
    )}
  </div>
</div>

  );
  
}
/*Changes Explained
Initialization:

The timeLeft state is initialized as null to avoid mismatches during SSR.

Deferred Calculation:

All dynamic calculations are performed inside the useEffect hook, which runs only after the component mounts on the client.

Hydration Consistency:

By deferring the logic to the client, the server and client now render consistent markup during hydration.
This approach ensures the error you're facing is resolved while maintaining the countdown functionality. Let me know if anything else comes up! */
