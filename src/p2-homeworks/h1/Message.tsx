import React from 'react'
import s from "./Message.module.css"

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function Message(props: MessageType) {
    return (
        <div className={s.block}>
            <span className={s.message}>
                <span className={s.avatar}>
                    <img src={props.avatar} className={s.avatarProps} alt=""/>
                </span>

                <span className={s.textBlock} >
                    <div className={s.nickName}>
                        {props.name}
                    </div>
                    <div className={s.text}>
                        {props.message}
                        <span className={s.time}>
                             {props.time}
                        </span>
                    </div>
                </span>
            </span>
        </div>
    )
}


export default Message

