import css from "./Options.module.css";

const Options = ({ updateFeedback, onReset, total }) => {
  return (
    <div className={css.options}>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
        className={css.btn}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
        className={css.btn}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
        className={css.btn}
      >
        Bad
      </button>
      {total > 0 && (
        <button onClick={onReset} className={css.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
