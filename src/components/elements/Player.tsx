import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import "./Player.css"
import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";


const Player = (props: any) => {

    const [playSwitcher, setPlaySwitcher] = useState(false)
    const [trackTime, setTrackTime] = useState(0);

    // @ts-ignore
    // const currentTrack = document.getElementById('currentTrack')
    const currentTrack = useRef()
    // @ts-ignore
    const durationTime = currentTrack.current ? currentTrack.current.duration >> 0 : 30
    //const durationTime = 33

    let progress = `${((trackTime/durationTime)*100).toString()} + %`

    let IconToShow = () => !playSwitcher ? (<PlayIcon/>) : (<PauseIcon/>)

    const playHandler = () => {
        if (!playSwitcher) {
            // @ts-ignore
            currentTrack.current.currentTime = trackTime
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
            currentTrack.current.currentTime = trackTime
            // @ts-ignore
            currentTrack.current.play()
        }
    }

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
                    id="currentTrack"
                    // @ts-ignore
                    ref={currentTrack}
                    src={`https://levi9-song-quiz.herokuapp.com/api/${props.songToPlay}`}
                    style={{display: "none"}}
                    onTimeUpdate={() => {
                        // @ts-ignore
                        setTrackTime(currentTrack.current.currentTime >> 0)
                        // @ts-ignore
                        if (currentTrack.current.ended) {
                            setTrackTime(0)
                            setPlaySwitcher(false)
                        }
                    }
                    }
                >
                </audio>
            </div>
            <div id="seek" className="player-rightside">
                <div data-range="" className="custom__range">
                    <div data-range="" className="progress-bar">
                        <div data-range=""
                             className="progress-bar-background bg-quiz-800">
                        </div>
                        <div data-range=""
                             className="progress-bar-cover bg-quiz-300"
                             style={{width: progress}}>
                        </div>
                    </div>
                    <input
                        type="range"
                        className="range"
                        data-range=""
                        id="slider"
                        name="foo"
                        min={0}
                        max={durationTime}
                        value={trackTime}
                        step="0.1"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            // @ts-ignore
                            setTrackTime(e.target.value);
                        }}
                        // @ts-ignore
                        onMouseDown={() => currentTrack.current.pause()}
                        onMouseUp={() => rangeHandler()}
                    />
                </div>
                <div className="player-time">
                    <div
                        id="player-time-current"
                        className="player-time-current">
                        00:{trackTime <= 9 ? "0" + (trackTime >> 0) : trackTime >> 0}
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
