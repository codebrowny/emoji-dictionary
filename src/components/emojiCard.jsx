import React from "react";
import "../App.css";

const EmojiCard = ({ emojiFace, emojiName, emojiDetails }) => {
  return (
    <div className="card">
      <h1>{emojiFace}</h1>
      <h2>{emojiName}</h2>
      <p>{emojiDetails}</p>
    </div>
  );
};
export default EmojiCard;
