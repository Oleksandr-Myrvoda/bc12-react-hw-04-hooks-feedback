import "./App.css";
import React, { useState } from "react";

import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

import options from "./dataBase/options.json";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (event) => {
    const { name } = event.target;
    if (name === "good") return setGood((prevGood) => prevGood + 1);
    if (name === "neutral") return setNeutral((prevNeutral) => prevNeutral + 1);
    if (name === "bad") return setBad((prevBad) => prevBad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };
  const positivePercentage = Math.round(countPositiveFeedbackPercentage());

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>

      {total < 1 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
};
export default App;
