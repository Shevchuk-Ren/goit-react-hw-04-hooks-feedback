import React from 'react';
import Section from '../Section';
import FeedBack from '../Feedback';
import Statistics from '../Statistics';
import { Container } from './App.styled';

class App extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  leaveFeedback = option => {
    this.setState(prevState => {
      console.log(prevState[option]);
      return { [option]: prevState[option] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { neutral, bad, good } = this.state;
    const total = bad + neutral + good;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { neutral, bad, good } = this.state;
    const total = bad + neutral + good;
    const precentage = total ? (good * 100) / total : 0;
    return Math.round(precentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const leaveFeedback = this.leaveFeedback;
    const onPositivePercentage = this.countPositiveFeedbackPercentage();

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
            total={this.countTotalFeedback()}
            positivePercentage={onPositivePercentage}
            answer="No feedback given"
          />
        </Section>
      </Container>
    );
  }
}

export default App;
