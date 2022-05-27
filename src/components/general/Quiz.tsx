import Layout from "./Layout";
import React, {useContext} from "react";
import GameView from "./GameView";
import NameHolder from "../elements/NameHolder";

const Quiz = () => {
    return (
    <Layout children={<GameView children={<NameHolder />}/>}/>
    )}

export default Quiz
