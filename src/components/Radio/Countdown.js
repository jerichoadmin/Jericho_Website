import React, { useState, useEffect } from 'react';
import './Countdown.css'

const Countdown = () => {
  const targetDayOfWeek = 6; // Saturday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const targetHour = 11;     // 11:00 AM

  const calculateTimeRemaining = () => {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setHours(targetHour, 0, 0, 0);
  
    // Calculate the difference between the current time and the target time
    let timeDiff = targetDate - now;
  
    if (now.getDay() === targetDayOfWeek && now.getHours() >= targetHour) {
      // If it's currently Saturday and past the target hour, move to next week
      targetDate.setDate(targetDate.getDate() + 7);
      timeDiff = targetDate - now;
    } else if (now.getDay() !== targetDayOfWeek || (now.getDay() === targetDayOfWeek && now.getHours() < targetHour)) {
      // If it's not Saturday or the target time for this week hasn't passed yet, adjust the target date
      targetDate.setDate(targetDate.getDate() + (targetDayOfWeek + 7 - now.getDay()) % 7);
      timeDiff = targetDate - now;
    }
  
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  };
  

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining();
      if (remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
        // Countdown reached zero, reset for the Saturday after next at 11:00 AM
        const now = new Date();
        const nextSaturday = new Date(now);
        nextSaturday.setDate(nextSaturday.getDate() + (targetDayOfWeek + 7 - now.getDay()) % 7 + 14);
        nextSaturday.setHours(targetHour, 0, 0, 0);
  
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
        const newTimer = setInterval(() => {
          setTimeRemaining(calculateTimeRemaining());
        }, 1000);
  
        clearInterval(timer);
  
        return () => {
          clearInterval(newTimer);
        };
      } else {
        setTimeRemaining(remaining);
      }
    }, 1000);
  
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{timeRemaining.days}</span> days
      </div>
      <div className="countdown-item">
        <span>{timeRemaining.hours}</span> hours
      </div>
      <div className="countdown-item">
        <span>{timeRemaining.minutes}</span> minutes
      </div>
      <div className="countdown-item">
        <span>{timeRemaining.seconds}</span> seconds
      </div>
    </div>
  );
};

export default Countdown;
