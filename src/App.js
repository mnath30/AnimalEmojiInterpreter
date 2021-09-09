import "./styles.css";
import { useState } from "react";

export default function App() {
  const subheading = "You give us the emoji";
  const subheading2 = "We give you the meaning";
  const [inputentered, setInput] = useState();
  const [displayOutput, setDisplayOutput] = useState(
    "The meaning will be displayed here"
  );
  const emojiDictionary = {
    "🙈": " See-No-Evil Monkey",
    "🙉": "Hear-No-Evil Monkey",
    "🙊": "Speak-No-Evil Monkey",
    "💥": "Collision",
    "🐵": "Monkey Face",
    "🐒": "Monkey",
    "🦍": "Gorilla",
    "🦧": "Orangutan",
    "🐶": "Dog Face",
    "🐕": "Dog",
    "🦮": "Guide Dog",
    "🐕‍🦺": "Service Dog",
    "🐩": "Poodle",
    "🐺": "Wolf",
    "🦊": "Fox",
    "🦝": "Raccoon",
    "🐱": "Cat Face",
    "🐈": "Cat",
    "🦁": "Lion",
    "🐯": "Tiger Face",
    "🐅": "Tiger",
    "🐆": "Leopard",
    "🐴": "Horse Face",
    "🐎": "Horse",
    "🦄": "Unicorn",
    "🦓": "Zebra",
    "🦌": "Deer",
    "🐮": "Cow Face",
    "🐂": "Ox",
    "🦋": "Butterfly",
    "🐛": "Bug",
    "🐜": "Ant",
    "🐝": "Honeybee",
    "🐞": "Lady Beetle",
    "🦗": "Cricket",
    "🕷️": "Spider",
    "🕸️": "Spider Web",
    "🦂": "Scorpion",
    "🦟": "Mosquito"
  };

  const arrayOfEmoji = Object.keys(emojiDictionary);

  function printInput(event) {
    const inputEntered = event.target.value;
    setInput(inputEntered);
    findEmojiMeaning(inputEntered);
  }

  function findEmojiMeaning(input) {
    if (emojiDictionary[input] === undefined) {
      setDisplayOutput("Sorry that emoji does not exist in out database");
    } else {
      setDisplayOutput(emojiDictionary[input]);
    }
  }

  function getOutput(input) {
    findEmojiMeaning(input);
  }

  return (
    <div className="App">
      <h1>Animals Emoji Interpreter</h1>
      <div className="subheading">
        <p>
          <i>{subheading}</i>
        </p>
        <p>
          <i>{subheading2}</i>
        </p>
      </div>
      <input
        onChange={printInput}
        placeholder="Enter your emoji here"
        className="inputBox"
      />
      <div>
        <span className="displayEmojis">{inputentered}</span>
      </div>
      <div className="outputDisplay">{displayOutput}</div>
      <div className="emojiData">
        {arrayOfEmoji.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => getOutput(emoji)}
              className="emojiDisplay"
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
