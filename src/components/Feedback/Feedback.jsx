import React from 'react';
import { Button } from './Feedback.styled';
import PropTypes from 'prop-types';

const FeedBack = ({ options, onLeavFeedback }) => (
  <div className="buttons__set">
    {options.map(option => (
      <Button type="button" key={option} onClick={() => onLeavFeedback(option)}>
        {option}
      </Button>
    ))}
  </div>
);

FeedBack.propTypes = {
  onLeavFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedBack;
