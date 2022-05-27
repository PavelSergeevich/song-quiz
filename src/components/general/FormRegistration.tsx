import React, {ChangeEvent, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import "./FormRegistration.css"
import logo from "../../logo.png"
import Arrow from "../icons/Arrow";
import {getDataFromSStorage, setDataToSStorage} from "../../api/api";


const FormRegistration = () => {
    const [name, setName] = useState();

    useEffect(() => {
        setDataToSStorage("https://levi9-song-quiz.herokuapp.com/api/data");
    }, [])

    return (
    <div className="wrapper">
        <img
            src ={logo} alt="logo"
            className="logo"
        />
        <form className="modal modal-start">
            <h1 className="modal__title">Wellcome!</h1>
            <p className="modal__subtitle">
                Please enter your name and let's start our quiz!
            </p>
            <div>
                <input
                    id="input"
                    type="text"
                    maxLength={10}
                    placeholder="TYPE YOUR NAME HERE..."
                    autoComplete="off"
                    className="modal__input"
                    onChange={(e:ChangeEvent<HTMLInputElement>) => {
                        // @ts-ignore
                        setName(e.target.value);
                        sessionStorage.setItem("player", e.target.value)
                    }}
                    value={name}
                >
                </input>
            </div>
            <div>
                <Link to="/quiz" className="link">
                    <button
                        type="submit"
                        tabIndex={0}
                        className="quiz__button modal__button"
                        disabled={!name}
                        onClick={(e) => {
                            const scoreId: any = "score_" + name
                            sessionStorage.setItem(scoreId, "0")
                        }}
                        >
                        START QUIZ
                        <Arrow classForArrow={"quiz__button-arrow"} />
                    </button>
                </Link>
            </div>
        </form>
    </div>
    )}

export default FormRegistration
