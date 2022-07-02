import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <ul className={s.list}>
    <li className={s.item}>
      <button className={s.button} type="button" onClick={onGood}>
        Good
      </button>
    </li>
    <li className={s.item}>
      <button className={s.button} type="button" onClick={onNeutral}>
        Neutral
      </button>
    </li>
    <li className={s.item}>
      <button className={s.button} type="button" onClick={onBad}>
        Bad
      </button>
    </li>
  </ul>
);
FeedbackOptions.propType = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
export default FeedbackOptions;
