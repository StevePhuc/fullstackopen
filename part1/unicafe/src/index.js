import React, { useState } from "react";
import ReactDOM from "react-dom";

const FeedBack = () => {
    return (
        <div>
            <h1>Give FeedBack</h1>
        </div>
    );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }) => (
    <p>
        {text} {value}
    </p>
);

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = (good * 100) / total;
    if (total === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Statistics</h1>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <p>all {total} </p>
            <p>average {average} </p>
            <p>positive {positive} % </p>
        </div>
    );
};

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <FeedBack />
            <Button
                onClick={() => {
                    setGood(good + 1);
                }}
                text="good"
            />{" "}
            <Button
                onClick={() => {
                    setNeutral(neutral + 1);
                }}
                text="neutral"
            />
            <Button
                onClick={() => {
                    setBad(bad + 1);
                }}
                text="bad"
            />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
