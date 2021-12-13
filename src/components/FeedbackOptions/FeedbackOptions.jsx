import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(({ id, title }) => {
    return (
      <button
        className={styles.button}
        type="button"
        name={id}
        key={id}
        onClick={onLeaveFeedback}
      >
        {title}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default FeedbackOptions;
