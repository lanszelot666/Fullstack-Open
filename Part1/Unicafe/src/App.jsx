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

const Statistics = ({good, bad, neutral}) => {
  const calculateAll = () => good + neutral + bad;
  const calculateAverage = () => (good - bad) / (good + neutral + bad);
  const calculatePositive = () => (good / (good + neutral + bad)) * 100;

  return (
    <div>
      <Header title="statistics" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {calculateAll()}</p>
      <p>average {calculateAverage().toFixed(2)}</p>
      <p>postive {calculatePositive().toFixed(2)} %</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (feedbackType) => {
    const updatedGood = feedbackType === "good" ? good + 1 : good;
    const updatedNeutral = feedbackType === "neutral" ? neutral + 1 : neutral;
    const updatedBad = feedbackType === "bad" ? bad + 1 : bad;

    setGood(updatedGood);
    setNeutral(updatedNeutral);
    setBad(updatedBad);
  };

  const handleGoodFeedback = () => handleFeedback("good");
  const handleNeutralFeedback = () => handleFeedback("neutral");
  const handleBadFeedback = () => handleFeedback("bad");

  return (
    <div>
      <Header title="give feedback" />
      <Button handleClick={handleGoodFeedback} text="good"></Button>
      <Button handleClick={handleNeutralFeedback} text="neutral"></Button>
      <Button handleClick={handleBadFeedback} text="bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
