import React from 'react';
import PropTypes from 'prop-types';
import { Decoration, Point, Notification } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  answer,
}) => (
  <div className="statistics__set">
    {good === 0 && neutral === 0 && bad === 0 ? (
      <Notification>{answer}</Notification>
    ) : (
      <div>
        <Point>
          Good: <Decoration>{good}</Decoration>
        </Point>
        <Point>
          Neutral: <Decoration>{neutral}</Decoration>
        </Point>
        <Point>
          Bad: <Decoration>{bad}</Decoration>{' '}
        </Point>
        <Point>
          Total: <Decoration>{total}</Decoration>{' '}
        </Point>
        <Point>
          Positive feedback: <Decoration>{positivePercentage()}%</Decoration>
        </Point>
      </div>
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistics;
