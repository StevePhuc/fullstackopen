import React from "react";
import "./notification.css";

const Notification = ({ messageObj }) => {
    console.log();

    const { message, error } = messageObj;
    if (message === null) {
        return null;
    }

    if (error) {
        return <div className="notification error">{message}</div>;
    }

    return <div className="notification">{message}</div>;
};

export default Notification;
