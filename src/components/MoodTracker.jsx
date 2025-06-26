import React, { useState } from "react";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😊", label: "Good" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😢", label: "Very Sad" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(
    localStorage.getItem("mood") || null
  );

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    localStorage.setItem("mood", mood);
  };

  return (
    <div className="mood-container">
      <h2 className="mood-title">How are you feeling today?</h2>
      <div className="emoji-list">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => handleMoodSelect(m.emoji)}
            className={`emoji-btn ${
              selectedMood === m.emoji ? "active" : ""
            }`}
          >
            {m.emoji}
          </button>
        ))}
      </div>
      {selectedMood && (
        <p className="mood-result">
          You selected: <span>{selectedMood}</span>
        </p>
      )}
    </div>
  );
};

export default MoodTracker;
