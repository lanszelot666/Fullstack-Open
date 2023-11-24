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

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleFeedback = (feedbackType) => {
    const updatedGood = feedbackType === "good" ? good + 1 : good;
    const updatedNeutral = feedbackType === "neutral" ? neutral + 1 : neutral;
    const updatedBad = feedbackType === "bad" ? bad + 1 : bad;
    const updatedAll = all + 1;

    setGood(updatedGood);
    setNeutral(updatedNeutral);
    setBad(updatedBad);
    setAll(updatedAll);

    const newAverage = (updatedGood - updatedBad) / updatedAll;
    const newPositive = (updatedGood / updatedAll) * 100;

    setAverage(newAverage);
    setPositive(newPositive);
  };

  const handleGoodFeedback = () => handleFeedback("good");
  const handleNeutralFeedback = () => handleFeedback("neutral");
  const hadnleBadFeedback = () => handleFeedback("bad");


  return (
    <div>
      <Header title="give feedback" />
      <Button handleClick={handleGoodFeedback} text="good"></Button>
      <Button handleClick={handleNeutralFeedback} text="neutral"></Button>
      <Button handleClick={hadnleBadFeedback} text="bad"></Button>
      <Header title="statistics" />
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average.toFixed(2)}</p>
        <p>postive {positive.toFixed(2)} %</p>
      </div>
    </div>
  );
};

export default App;
