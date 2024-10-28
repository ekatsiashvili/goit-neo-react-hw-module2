import css from "./Feedback.module.css";

const Feedback = ({ state, total, percent }) => {
  return (
    <div className={css.feedback}>
      <div>Good: {state.good}</div>
      <div>Neutral: {state.neutral}</div>
      <div>Bad: {state.bad}</div>
      <div>Total: {total}</div>
      <div>Positive: {percent} %</div>
    </div>
  );
};

export default Feedback;
