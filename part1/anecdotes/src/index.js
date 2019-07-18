import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
    const votesZero = new Array(props.anecdotes.length).fill(0);
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(votesZero);

    console.log(votes);

    const increaseVote = () => {
        setVotes(votes.map((vote, index) => (index == selected ? vote + 1 : vote)));
    };

    const randomSelect = () => {
        const random = Math.floor(Math.random() * 5 + 1);
        // console.log(random);
        setSelected(random);
    };
    const maxIndex = () => {
        let maxVote = 0;
        let maxIndex = 0;
        votes.forEach((vote, index) => {
            if (vote > maxVote) {
                maxVote = vote;
                maxIndex = index;
            }
        });
        return maxIndex;
    };

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{props.anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={() => increaseVote()}>vote</button>
            <button onClick={() => randomSelect()}>next anecdotes</button>
            <h1>Anecdote with most votes</h1>
            <p>{props.anecdotes[maxIndex()]}</p>
            <p>has {votes[maxIndex()]} votes</p>
        </div>
    );
};

const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
