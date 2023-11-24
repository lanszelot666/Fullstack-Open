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
          <StatisticLine text="postive" value={calculatePositive().toFixed(2)}/>
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
      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
