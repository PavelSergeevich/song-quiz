import React from 'react';
import "./InfoContainer.css"
import Player from "./Player";


const InfoContainer = (props: any) => {

    const data = {
        nameArtist: props.data.data[props.count-1].name,
        songTitle: props.data.data[props.count-1].songTitle,
        image: props.data.data[props.count-1].image,
        audio: props.data.data[props.count-1].audio,
        description: props.data.data[props.count-1].description,
    }

    return (
        <div className="data__container">
            <div className="title">
                <h1 className="title__content">
                    {`${data.nameArtist} - ${data.songTitle}`}
                </h1>
            </div>
            <div className="image">
                <img src={`https://levi9-song-quiz.herokuapp.com/api/${data.image}`}
                     alt="Photo of a musician"
                     className="image__content" />
            </div>
            <Player
                classForPlayer={"actions__player actions__player_right"}
                songToPlay={data.audio}
                />
            <div className="description">
                <h2 className="description__content">
                    {data.description}
                </h2>
            </div>
        </div>
    )}

export default InfoContainer
