import React from "react";

const NameHolder = () => {
    let playerName = sessionStorage.getItem("player")
    return (
        <h2 className="quiz__header-content--playerName">
            {playerName}
        </h2>
    )}

export default NameHolder

