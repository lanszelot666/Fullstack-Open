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


  const increaseGoodFeedback = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };
  
  const increaseNeutralFeedback = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };
  
  const increaseBadFeedback = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <Header title="give feedback" />
      <Button handleClick={increaseGoodFeedback} text="good"></Button>
      <Button handleClick={increaseNeutralFeedback} text="neutral"></Button>
      <Button handleClick={increaseBadFeedback} text="bad"></Button>
      <Header title="statistics" />
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  );
};

export default App;
