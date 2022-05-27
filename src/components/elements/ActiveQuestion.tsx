import React, {useRef, useState} from "react";

const ActiveQuestion = (props: any) => {

    return (
        <>
            {
                props.question.data.map((item: any, i: number) => {
                    return (
                        <div key={item.id} className="actions__question"
                            // @ts-ignore
                             id={i+1}
                            // @ts-ignore
                             data-id={i+1}
                            // @ts-ignore
                             onClick={props.handler}
                        >
                            <div className="actions__question__container">
                                <div className="actions__question__container--point"></div>
                                <h2 className="actions__question__container--title">
                                    {`0${i + 1}: ${item.name} - ${item.songTitle}`}
                                </h2>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}

export default ActiveQuestion
