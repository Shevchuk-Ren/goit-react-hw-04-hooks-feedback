import { useState } from 'react';
import Section from '../Section';
import FeedBack from '../Feedback';
import Statistics from '../Statistics';
import { Container } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // static defaultProps = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const total = bad + neutral + good;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = bad + neutral + good;
    const precentage = total ? (good * 100) / total : 0;
    return Math.round(precentage);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedBack
          options={['good', 'neutral', 'bad']}
          onLeavFeedback={leaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage}
          answer="No feedback given"
        />
      </Section>
    </Container>
  );
}
