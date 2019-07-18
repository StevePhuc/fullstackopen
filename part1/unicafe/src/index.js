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
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
);

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = Math.round(((good - bad) / total) * 100) / 100;
    const positive = Math.round(((good * 100) / total) * 10) / 10;
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
            <table>
                <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <tr>
                        <td>all</td>
                        <td> {total} </td>
                    </tr>
                    <tr>
                        <td>average </td>
                        <td>{average} </td>
                    </tr>
                    <tr>
                        <td> positive</td>
                        <td>{positive} % </td>
                    </tr>
                </tbody>
            </table>
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
