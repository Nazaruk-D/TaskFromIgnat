import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: () => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback()}// need to fix

    return (
        <div>
            <table className={s.table}>
                <tbody>
                <tr>
                    <td className={s.td}>{props.affair.name}</td>
                    <td className={s.td2}>{props.affair.priority}</td>
                    <td className={s.td2}><button onClick={deleteCallback} className={s.button}>X</button></td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Affair
