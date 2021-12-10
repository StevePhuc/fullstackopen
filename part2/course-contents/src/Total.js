import React from "react";

const Total = ({ parts }) => <b>Total of {parts.reduce((s, p) => s + p.exercises, 0)} exercises</b>;

export default Total;
