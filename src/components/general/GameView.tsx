import React, {useEffect, useState, useRef} from 'react';
import "./GameView.css"
import logo from "../../logo.png"
import union from "../../union.png"
import {Link} from "react-router-dom";
import Arrow from "../icons/Arrow";
import {getDataFromSStorage} from "../../api/api";
import InfoContainer from "../elements/InfoContainer";
import Player from "../elements/Player";
import ActiveQuestion from "../elements/ActiveQuestion";
import GenreList from "../elements/GenreList";


export interface NameWrapperProps {
    children?: JSX.Element|JSX.Element[];
}

const GameView = ({children} : NameWrapperProps) => {

    const [randomNum, setRandomNum] = useState( (1 + Math.random()*3.9) >> 0);
    const [showInfo, setShowInfo] = useState(false)
    const [stopClick, setStopClick] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answerToShow, setAnswerToShow] = useState(0)
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(true)
    const [scoreToShow, setScoreToShow] = useState(0)
    const [styleForProgress, setStyleForProgress] = useState("quiz__progress")

    const block = getDataFromSStorage()

    const scoreId: any = "score_" + sessionStorage.getItem("player")

    sessionStorage.setItem("current_question", currentQuestion.toString())
    //sessionStorage.setItem("random_answer", randomNum.toString())

    useEffect(() => {
        sessionStorage.setItem("random_answer", ((1 + Math.random()*3.9) >> 0).toString())
        const current = sessionStorage.getItem("current_question")
        setCurrentQuestion(Number(current))
        sessionStorage.setItem("current_question", currentQuestion.toString())
        const random = sessionStorage.getItem("random_answer")
        setRandomNum(Number(random))
        //setAnswerToShow(Number(random))
        setStyleForProgress(styleForProgress+` active_${currentQuestion+1}`)
    }, [currentQuestion])

    let scoreCounter = 3;

    const quizHandler = (e: any) => {
        e.stopPropagation()
        setShowInfo(true)
        if (!stopClick) {
            setAnswerToShow(Number(e.currentTarget.innerText.charAt(1)))
            if (e.currentTarget.innerText.charAt(1) === randomNum.toString()) {
                e.currentTarget.classList.add("right")
                setStopClick(true)
                let tempScore: any = Number(sessionStorage.getItem(scoreId))
                sessionStorage.setItem(scoreId, (tempScore + scoreCounter).toString())
                setIsAnswerCorrect(false)
                setScoreToShow(tempScore + scoreCounter)
                setStyleForProgress(styleForProgress+` correct__progress_${currentQuestion+1}`)
                // @ts-ignore
                document.getElementById(`${block[currentQuestion].genre}`).classList.add("correct")
                if (document.getElementById(`${block[currentQuestion].genre+"_arrow"}`)) {
                    // @ts-ignore
                    document.getElementById(`${block[currentQuestion].genre + "_arrow"}`).classList.add("correct")
                }
            } else {
                e.currentTarget.classList.add("wrong")
                scoreCounter--
            }
        } else {
            setAnswerToShow(Number(e.currentTarget.innerText.charAt(1)))
        //     let answer: any = Number(e.currentTarget.innerText.charAt(1))
        //     setAnswerToShow(answer)
        }
    }

    const InfoToShow = () => !showInfo ? (
        <img
            src={union}
            alt="union-quiz-picture"
            className="info__picture" />
    ) : (
        <InfoContainer
            data={block[currentQuestion]}
            count={answerToShow}
        />
    )

    return (
        <div className="container">
            <div className="quiz__header">
                <img
                    src={logo}
                    alt="logo"
                    className="quiz__header-logo" />
                <div className="quiz__header-content">
                    {children}
                    <h2 className="quiz__header-content--title">
                        Your Score:
                        <span className="quiz__header-content--score">{` ${scoreToShow}`}</span>
                    </h2>
                </div>
            </div>
            <div className={styleForProgress}></div>
            <div className="quiz__music_genre">
                <GenreList block={block} genre={"quiz__music_genre__list--item"} arrow={"quiz__music_genre__list--item-arrow"}/>
            </div>
            <div className="quiz__wrapper">
                <div className="actions">
                    <h2 className="actions__title">
                        {`${block[currentQuestion].genre.charAt(0).toUpperCase() + block[currentQuestion].genre.slice(1)} song`}
                    </h2>
                    <p className="actions__subtitle">
                        Listen to the audio and guess what song is it from the list
                    </p>
                    <Player
                        classForPlayer={"actions__player"}
                        songToPlay={block[currentQuestion].data[randomNum-1].audio}
                        random={randomNum}
                        switcher={currentQuestion}
                        image={stopClick ? {
                            backgroundImage: `url(https://levi9-song-quiz.herokuapp.com/api/${block[currentQuestion].data[randomNum-1].image})`,
                            backgroundPosition: "center center",
                            backgroundSize: "auto 9rem",
                        } : {}
                    }
                    />
                    <ActiveQuestion
                        question={block[currentQuestion]}
                        random={randomNum}
                        handler={quizHandler}
                    />
                </div>
                <div className="info">
                    {InfoToShow()}
                </div>
            </div>
            <div className="quiz__button__container">
                {currentQuestion === 3 ? (
                    <Link to="/summary" className="link">
                        <button
                            type="submit"
                            tabIndex={0}
                            className="quiz__button modal__button"
                            disabled={isAnswerCorrect}
                            // onClick={(e) => {
                            // e.preventDefault()
                            // }}
                        >
                            See my score
                            <Arrow classForArrow={"quiz__button-arrow"} />
                        </button>
                    </Link>
                ):(
                    <button type="submit"
                            tabIndex={0}
                            disabled={isAnswerCorrect}
                            className="quiz__button"
                            onClick={() => {
                                setCurrentQuestion(currentQuestion+1)
                                setShowInfo(false)
                                setStopClick(false)
                                setIsAnswerCorrect(true)
                                // @ts-ignore
                                document.getElementById(`${block[currentQuestion+1].genre}`).classList.add("active")
                                // @ts-ignore
                                if (document.getElementById(`${block[currentQuestion+1].genre+"_arrow"}`)) {
                                    // @ts-ignore
                                    document.getElementById(`${block[currentQuestion+1].genre+"_arrow"}`).classList.add("active")
                                }
                            }}>
                        NEXT QUESTION
                        <Arrow classForArrow={"quiz__button-arrow"} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default GameView
