import React from "react";
import Layout from "./Layout";
import ScoreView from "./ScoreView";

const Summary = () => {
    return (
    <Layout children={<ScoreView />}/>
    )}

export default Summary
