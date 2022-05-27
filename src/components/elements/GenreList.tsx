import React, {useRef} from 'react';

import Arrow from "../icons/Arrow";


const GenreList = (props: any) => {

    const styleForGenre = props.genre
    const styleForArrow = props.arrow
    const block = props.block

    return (
        <ul className="quiz__music_genre__list">
            {block.map((item: any, i: number) => {
                if (i !== (block.length -1)) {
                    return (
                        <>
                            <li key={block[i].genre} id={block[i].genre} className={i === 0 ? (styleForGenre + ' active') : styleForGenre}>
                                {block[i].genre}
                            </li>
                            <li key={block[i].genre+"_ar"} id={block[i].genre+"_arrow"} className={i === 0 ? (styleForGenre + ' active') : styleForGenre}>
                                <Arrow classForArrow={styleForArrow}/>
                            </li>
                        </>
                    )
                } else {
                    return (
                        <li key={block[i].genre} id={block[i].genre} className={styleForGenre}>
                            {block[i].genre}
                        </li>
                    )
                }
            })
            }
        </ul>
    )}

export default GenreList
