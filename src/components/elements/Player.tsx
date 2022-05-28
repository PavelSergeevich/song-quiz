import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import "./Player.css"
import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";


const Player = (props: any) => {

    const [playSwitcher, setPlaySwitcher] = useState(false)
    const [trackTime, setTrackTime] = useState(0);

    const currentTrack = useRef()

    const currentInput = useRef()

    // @ts-ignore
    const durationTime = currentTrack.current ? currentTrack.current.duration >> 0 : 30

    useEffect(() => resetHandler(), [props.switcher])

    let IconToShow = () => !playSwitcher ? (<PlayIcon/>) : (<PauseIcon/>)

    const playHandler = () => {
        resetHandler()
        if (!playSwitcher) {
            // @ts-ignore
            currentTrack.current.currentTime = currentInput.current.value
            // @ts-ignore
            currentTrack.current.play()
            setPlaySwitcher(true)
        }  else {
            // @ts-ignore
            currentTrack.current.pause()
            setPlaySwitcher(false)
        }
    }

    const rangeHandler = () => {
        if (playSwitcher) {
            // @ts-ignore
            currentTrack.current.currentTime = currentInput.current.value
            // @ts-ignore
            currentTrack.current.play()
        }
    }

   const resetHandler = () => {
        setTrackTime(0)
        setPlaySwitcher(false)
    }
    const styleRange: any = {"--background-size": "0%"};

    return (
        <div className={props.classForPlayer}>
            <div className="player__button" style={props.image} onClick={
                () => {
                    !playSwitcher ? setPlaySwitcher(true) : setPlaySwitcher(false)
                    playHandler()
                }}>
                <div title="Play" className="pointer">
                    <div className="round"></div>
                    {IconToShow()}
                </div>
                <audio
                    // @ts-ignore
                    ref={currentTrack}
                    src={`https://levi9-song-quiz.herokuapp.com/api/${props.songToPlay}`}
                    style={{display: "none"}}
                    preload="auto"
                    onTimeUpdate={() => {
                        // @ts-ignore
                        setTrackTime(currentTrack.current.currentTime)
                        // @ts-ignore
                        currentInput.current.style.setProperty("--background-size", `${((currentTrack.current.currentTime/ durationTime) * 100)}%`);
                        // @ts-ignore
                        if (currentTrack.current.ended) {
                            resetHandler()
                        }
                    }
                    }
                >
                </audio>
            </div>
            <div id="seek" className="player-rightside">
                <div className="custom__range">
                    <input
                        type="range"
                        className="range"
                        // @ts-ignore
                        ref={currentInput}
                        data-range=""
                        id={props.id}
                        name="foo"
                        min={0}
                        max={durationTime}
                        value={trackTime}
                        step="0.1"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            // @ts-ignore
                            setTrackTime(e.target.valueAsNumber)
                        }}
                        // @ts-ignore
                        onMouseDown={() => currentTrack.current.pause()}
                        onMouseUp={() => rangeHandler()}
                        style={styleRange}
                    />
                </div>
                <div className="player-time">
                    <div
                        id="player-time-current"
                        className="player-time-current">
                        00:{trackTime < 10 ? "0" + (trackTime >> 0) : trackTime >> 0}
                    </div>
                    <div
                        className="player-time-total">
                        00:{durationTime}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
