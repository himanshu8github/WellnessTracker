import React, { useRef, useState, useEffect } from "react";

const tracks = [
  { title: "Sacred Chanting", src: "/assets/track1.mp3" },
  { title: "Yoga Meditation", src: "/assets/track2.mp3" },
  { title: "Soft Indian Sitar", src: "/assets/track3.mp3" },
  { title: "Indian Chill", src: "/assets/track4.mp3" },
  { title: "Calm India", src: "/assets/track5.mp3" },
];

const MeditationPlayer = () => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Update time
  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
    };
  }, [currentTrack]);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleNext = () => {
    const nextTrack = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextTrack);
    setIsPlaying(false);
    setProgress(0);
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 100);
  };

  // Format seconds → MM:SS
  const formatTime = (sec) => {
    if (isNaN(sec)) return "00:00";
    const mins = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="music-container">
      <h2 className="music-title">Meditation Music</h2>
      <p className="music-current">🎵 Now Playing: {tracks[currentTrack].title}</p>

      <audio ref={audioRef} src={tracks[currentTrack].src} />

      <div className="music-controls">
        {!isPlaying ? (
          <button className="music-btn" onClick={handlePlay}>▶️ Play</button>
        ) : (
          <button className="music-btn" onClick={handlePause}>⏸️ Pause</button>
        )}
        <button className="music-btn next-btn" onClick={handleNext}>⏭️ Next</button>
      </div>

      <div className="progress-container">
        <span>{formatTime(progress)}</span>
        <input
          type="range"
          value={progress}
          max={duration}
          onChange={(e) => {
            const time = Number(e.target.value);
            audioRef.current.currentTime = time;
            setProgress(time);
          }}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default MeditationPlayer;
