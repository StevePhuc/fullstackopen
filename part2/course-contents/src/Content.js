import React from "react";

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

export default Content;
