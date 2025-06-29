import React, { useState, useEffect } from "react";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [savedMsg, setSavedMsg] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("journalEntries");
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  const saveEntry = () => {
    if (!entry.trim()) return;
    const newEntry = {
      text: entry.trim(),
      timestamp: new Date().toLocaleString(),
    };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
    setSavedMsg("Saved!");
    setEntry("");
    setTimeout(() => setSavedMsg(""), 2000);
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="journal-container">
      <h2 className="journal-title">📝 Personal Journal</h2>
      <textarea
        className="journal-textarea"
        rows="4"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts..."
      />
      <br />
      <button className="journal-save-btn" onClick={saveEntry}>
        Save Entry
      </button>
      {savedMsg && <p className="journal-saved-msg">{savedMsg}</p>}

      <div className="journal-history">
        <h3>📚 Your Entries</h3>
        {entries.length === 0 ? (
          <p style={{ fontStyle: "italic" }}>No entries yet.</p>
        ) : (
          entries.map((item, idx) => (
            <div key={idx} className="journal-entry">
              <p><strong>{item.timestamp}</strong></p>
              <p>{item.text}</p>
              <button className="delete-btn" onClick={() => deleteEntry(idx)}>🗑️ Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Journal;
