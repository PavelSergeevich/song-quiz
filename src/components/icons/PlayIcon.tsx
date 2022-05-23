import React from "react";
import "./CustomRange.css"

const CustomRange = () => {

    return (
        <div style={{
            background: "grey",
            height: "90px",
            display: "flex",
            verticalAlign: "middle",
            padding: "20px",
        }}>
            <input type="range" />
        </div>
    )
}

export default CustomRange
