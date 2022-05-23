import React from 'react';
import "./GameView.css"
import logo from "../../logo.png"
import union from "../../union.png"

const GameView = () => {
    return (
        <div className="container">
            <div className="quiz__header">
                <img
                    src={logo}
                    alt="logo"
                    className="quiz__header-logo" />
                <div className="quiz__header-content">
                    <h2 className="quiz__header-content--playerName">123</h2>
                    <h2 className="quiz__header-content--title">
                        Your Score:
                        <span className="quiz__header-content--score">0</span>
                    </h2>
                </div>
            </div>
            <div className="quiz__progress"></div>
            <div className="quiz__music_genre">
                <ul className="quiz__music_genre__list">
                    <li className="quiz__music_genre__list--item active">JAZZ</li>
                    <li className="quiz__music_genre__list--item active">
                        <svg width="20" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg" className="quiz__music_genre__list--item-arrow">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd">
                            </path>
                        </svg>
                    </li>
                    <li className="quiz__music_genre__list--item">ROCK</li>
                    <li className="quiz__music_genre__list--item">
                        <svg width="20" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg" className="quiz__music_genre__list--item-arrow">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd">
                            </path>
                        </svg>
                    </li>
                    <li className="quiz__music_genre__list--item">POP</li>
                    <li className="quiz__music_genre__list--item">
                        <svg width="20" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg" className="quiz__music_genre__list--item-arrow">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd">
                            </path>
                        </svg>
                    </li>
                    <li className="quiz__music_genre__list--item">SOUNDTRACK</li>
                </ul>
            </div>
            <div className="quiz__wrapper">
                <div className="actions">
                    <h2 className="actions__title">Jazz song</h2>
                    <p className="actions__subtitle">
                        Listen to the audio and guess what song is it from the list
                    </p>
                    <div className="actions__player">
                        <div className="player__button">
                            <div title="Play" className="pointer">
                                <div className="round"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                     fill="currentColor" className="icon">
                                    <path d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z">
                                    </path>
                                </svg>
                            </div>
                            <audio src={"https://levi9-song-quiz.herokuapp.com/api/audio/1-2.mp3"}
                                   style={{display: "block"}}>
                            </audio>
                        </div>
                        <div id="seek" className="player-rightside">
                            <div  className="custom__range">
                                <input  type="range"/>
                            </div>
                            <div  className="player-time">
                                <div  className="player-time-current">00:00</div>
                                <div  className="player-time-total">00:29</div>
                            </div>
                        </div>
                    </div>
                    <div  className="actions__question">
                        <div className="actions__question__container">
                            <div className="actions__question__container--point"></div>
                            <h2  className="actions__question__container--title">
                                01: John Coltrane - Everytime We Say Goodbye
                            </h2>
                        </div>
                    </div>
                    <div   className="actions__question">
                        <div  className="actions__question__container">
                            <div  className="actions__question__container--point"></div>
                            <h2  className="actions__question__container--title">
                                02: Ella Fitzgerald - Blue Skies
                            </h2>
                        </div>
                    </div>
                    <div   className="actions__question">
                        <div  className="actions__question__container">
                            <div  className="actions__question__container--point"></div>
                            <h2  className="actions__question__container--title">
                                03: John Coltrane - Everytime We Say Goodbye
                            </h2>
                        </div>
                    </div>
                    <div   className="actions__question">
                        <div  className="actions__question__container">
                            <div  className="actions__question__container--point"></div>
                            <h2  className="actions__question__container--title">
                                04: John Coltrane - Everytime We Say Goodbye
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <img
                        src={union}
                        alt="union-quiz-picture"
                        className="info__picture" />
                </div>
            </div>
            <div className="quiz__button">
                <button type="submit"
                        tabIndex={0}
                        disabled={true}
                        className="quiz__button">
                    NEXT QUESTION
                    <svg width="50"
                         fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                         className="quiz__button-arrow">
                        <path fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.14l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a20 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd">
                        </path>
                    </svg>
                </button>
            </div>
        </div>

    )}

export default GameView
