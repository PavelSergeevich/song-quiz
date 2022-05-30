import React from 'react';
import "./ScoreView.css"
import {Link, useNavigate} from "react-router-dom";
import logo from "../../logo.png"
import union_sum from "../../union_sum.png"
import Arrow from "../icons/Arrow";

const ScoreView = () => {
    const name: any = sessionStorage.getItem("player")
    const scoreId: any = "score_" + name
    const score: any = sessionStorage.getItem(scoreId)

    let navigate = useNavigate();

    return (
        <div className="wrapper">
            <img src={logo}
                 alt="logo"
                 className="logo"
                 onClick={() => navigate("/", { replace: true })}
            />
            <form className="modal_container modal-summary">
                <img src={union_sum}
                     alt="union-quiz-picture"
                     className="modal__picture" />
                <div className="modal__score">{score}</div>
                <h1 className="modal__title">
                    {score !== "12" ?
                        `${name.charAt(0).toUpperCase() + name.slice(1)}, you can do better, try again!`
                        :
                        `${name.charAt(0).toUpperCase() + name.slice(1)}, did so great!`
                    }
                </h1>
                <p className="modal__subtitle">
                    {score !== "12" ?
                        `You've got ${score} out of 12 points.`
                    :
                        `You've got ${score} out of 12 points. You are definitely a music lover!`
                    }
                </p>
                <div>
                    <Link to="/quiz" className="link">
                        <button
                            type="submit"
                            tabIndex={0}
                            className="quiz__button modal__button"
                            onClick={(e) => {
                                sessionStorage.setItem(scoreId, "0")
                            }}
                        >
                            TRY AGAIN
                            <Arrow classForArrow={"quiz__button-arrow"} />
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )}

export default ScoreView
