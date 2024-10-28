import "./App.css";
import { useState, useEffect } from "react";

import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

//initial state of reviews
const startState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

//callback function to set up initial state, either from localStorage or zero's
const initialState = () => {
  const currentState = localStorage.getItem("savedState");
  if (currentState !== null) {
    return JSON.parse(currentState);
  }
  return startState;
};

//main logic
const App = () => {
  const [state, setState] = useState(initialState);

  const total = state.good + state.neutral + state.bad;
  const percent = Math.round((state.good / total) * 100);

  //updating state
  const updateFeedback = (feedbackType) => {
    setState({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    });
  };

  const onReset = () => {
    setState(startState);
  };

  //saving state to localStorage
  useEffect(() => {
    localStorage.setItem("savedState", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        onReset={onReset}
        total={total}
      />
      {total > 0 ? (
        <Feedback state={state} total={total} percent={percent} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
