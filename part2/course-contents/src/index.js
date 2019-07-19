import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
    return <h2>{props.course}</h2>;
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
    const courses = [
        {
            name: "Half Stack application development",
            id: 1,
            parts: [
                {
                    name: "Fundamentals of React",
                    exercises: 10,
                    id: 1
                },
                {
                    name: "Using props to pass data",
                    exercises: 7,
                    id: 2
                },
                {
                    name: "State of a component",
                    exercises: 14,
                    id: 3
                },
                {
                    name: "Redux",
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: "Node.js",
            id: 2,
            parts: [
                {
                    name: "Routing",
                    exercises: 3,
                    id: 1
                },
                {
                    name: "Middlewares",
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ];

    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map((course, i) => (
                <Course key={i} course={course} />
            ))}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
