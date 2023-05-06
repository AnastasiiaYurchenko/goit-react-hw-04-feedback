import { useState } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsArray = ['good', 'neutral', 'bad'];

  const handleLeaveFeedback = e => {
    if (e === 'good') {
      setGood(good + 1);
      // або
      // setGood(prev => prev + 1);
    }
    if (e === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (e === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = good + neutral + bad;
    const result = Math.round((good / totalFeedback) * 100);

    if (isNaN(result)) {
      return 0;
    }
    return result;
  };

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsArray}
          // або
          // options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Layout>
  );
};

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
  title: PropTypes.string,
  message: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
