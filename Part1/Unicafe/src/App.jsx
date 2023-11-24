import { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, bad, neutral }) => {
  const calculateAll = () => good + neutral + bad;
  const calculateAverage = () => (good - bad) / (good + neutral + bad);
  const calculatePositive = () => (good / (good + neutral + bad)) * 100;

  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={calculateAll()} />
          <StatisticLine text="average" value={calculateAverage().toFixed(2)} />
          <StatisticLine
            text="postive"
            value={calculatePositive().toFixed(2)}
          />
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

const StatisticLine = ({ text, value }) => {
  const leftPadding = {
    paddingLeft: "20px",
  };

  return (
    <tr>
      <td>{text}</td>
      <td style={leftPadding}>{value}</td>
    </tr>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleGoodFeedback = () => handleFeedback("good");
  const handleNeutralFeedback = () => handleFeedback("neutral");
  const handleBadFeedback = () => handleFeedback("bad");

  const handleAnecdoteButton = () => {
    const rand = Math.floor(Math.random() * 8);
    setSelected(rand);
    console.log("Random generated number: ", rand);
  };

  const handleFeedback = (feedbackType) => {
    const updatedGood = feedbackType === "good" ? good + 1 : good;
    const updatedNeutral = feedbackType === "neutral" ? neutral + 1 : neutral;
    const updatedBad = feedbackType === "bad" ? bad + 1 : bad;

    setGood(updatedGood);
    setNeutral(updatedNeutral);
    setBad(updatedBad);
  };

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <Button handleClick={handleAnecdoteButton} text="next anecdote" />
      <Header title="give feedback" />
      <Button handleClick={handleGoodFeedback} text="good" />
      <Button handleClick={handleNeutralFeedback} text="neutral" />
      <Button handleClick={handleBadFeedback} text="bad" />
      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
      <br />
    </div>
  );
};

export default App;
