import React from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    setNameCallbackEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    users: UserType[]
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, setNameCallbackEnter, addUser, error, totalUsers, users} // деструктуризация пропсов
) => {
    // const inputClass = name.length < 4 ? s.error : s.someClass // need to fix with (?:)
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)

    return (
        <div>
            <table>
                <tbody className={s.table}>

                <tr>
                    <td>
                        <input value={name}
                               onChange={setNameCallback}
                               onKeyDown={setNameCallbackEnter}
                               className={inputClass}
                               onBlur={setNameCallback}/>

                    </td>
                    <td>
                        <a onClick={addUser}>
                            <button className={s.inpBut}>Add</button>
                            <div className={s.liquid}></div>
                        </a>
                    </td>
                    <td className={s.totalUsers}>
                        {totalUsers}
                    </td>
                </tr>
                <tr>
                    <td className={s.errorText}>{error}
                    </td>
                </tr>
                {users.map(e => <tr key={e._id}>
                    <td>Имя пользователя: {e.name}</td>
                </tr>)}
                </tbody>
            </table>
        </div> // решил реализовать кнопку из Tik-toka, xDD
    )
}

export default Greeting
