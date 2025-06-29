import React, { useState } from "react";

const tips = [
  "Take 10 deep breaths to relax your body and mind.",
  "Drink a glass of water and stay hydrated.",
  "Stretch for 2 minutes to reduce tension.",
  "Go for a 5-minute walk — even indoors!",
  "Write down one thing you're grateful for.",
  "Listen to calm music and close your eyes.",
  "Avoid screens for 15 minutes and just breathe.",
  "Compliment yourself — you're doing great!",
  "Eat something healthy — your body deserves it.",
  "Take a moment to sit in silence — recharge."
];

const WellnessTips = () => {
  const [tip, setTip] = useState("");

  const handleGetTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  };

  return (
    <div className="tips-container">
      <h2 className="tips-title">💡 Wellness Tip</h2>

      <button className="tips-btn" onClick={handleGetTip}>
        Get a Tip
      </button>

      {tip && (
        <div className="tips-box">
          <p>{tip}</p>
        </div>
      )}
    </div>
  );
};

export default WellnessTips;
