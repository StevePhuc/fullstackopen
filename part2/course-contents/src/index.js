import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
    return <h1>{props.course}</h1>;
};

const Part = props => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    );
};
const Content = ({ parts }) => {
    // console.log(parts);

    return (
        <div>
            {parts.map((part, i) => (
                <Part key={i} part={part.name} exercises={part.exercises} />
            ))}
        </div>
    );
};

const Total = ({ parts }) => <b>Total of {parts.reduce((s, p) => s + p.exercises, 0)} exercises</b>;

const Course = ({ course }) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    );
};

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    };

    return (
        <div>
            <Course course={course} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
