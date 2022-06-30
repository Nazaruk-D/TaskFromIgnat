import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: Array<AffairType> // need to fix any
    deleteAffairCallback: () => void /*(_id:number)=> void*/ /*(_id: number)=>void*/// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback()}// need to fix

    return (
        <div>
123
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
