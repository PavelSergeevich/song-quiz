import React, {ChangeEvent, useState} from 'react';
import "./FormRegistration.css"
//import Input from "../elements/Input";
//import Button from "../elements/Button";
import logo from "../../logo.png"

const FormRegistration = () => {
    const [name, setName] = useState();

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
                    }}
                    value={name}
                >
                </input>
            </div>
            <div>
                <button
                    type="submit"
                    tabIndex={0}
                    className="quiz__button modal__button"
                    disabled={!name}
                    onClick={(e) => {
                        e.preventDefault()

                    }}>
                    START QUIZ
                    <svg
                        width="50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="quiz__button-arrow"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.14l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a20 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        >
                        </path>
                    </svg>
                </button>
            </div>
        </form>
    </div>
    )}

export default FormRegistration
