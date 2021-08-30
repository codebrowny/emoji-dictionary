import React from "react";
import EmojiCard from "./emojiCard";
import "../App.css";

const emojis = [
  {
    emojiName: "Grinning Face",
    emojiFace: "😀",
    emojiDetails:
      "The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text",
    id: 1,
  },
  {
    emojiName: "Smiling Face With Open Mouth",
    emojiFace: "😃",
    emojiDetails:
      "Typical smiley face with open mouth and oval eyes. Is in a positive mood, shows its teeth and laughs cheerfully. Expresses enthusiasm: from a cheerful greeting to boundless joy",
    id: 2,
  },
  {
    emojiName: "Nerd Face",
    emojiFace: "🤓",
    emojiDetails:
      "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits.",
    id: 3,
  },
];

function buildEmojiCard(emoji) {
  return (
    <EmojiCard
      key={emoji.id}
      emojiFace={emoji.emojiFace}
      emojiName={emoji.emojiName}
      emojiDetails={emoji.emojiDetails}
    />
  );
}

const EmojiSection = () => {
  return (
    <section className="emoji-section">{emojis.map(buildEmojiCard)}</section>
  );
};

export default EmojiSection;
