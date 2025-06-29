import React from "react";
import MoodTracker from "../components/MoodTracker";
import Journal from "../components/Journal";
import MeditationPlayer from "../components/MusicPlayer";
import WellnessTips from "../components/WellnessTips";

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-card"><MoodTracker /></div>
      <div className="dashboard-card"><Journal /></div>
      <div className="dashboard-card"><MeditationPlayer /></div>
      <div className="dashboard-card"><WellnessTips /></div>
    </div>
  );
};

export default Dashboard;
