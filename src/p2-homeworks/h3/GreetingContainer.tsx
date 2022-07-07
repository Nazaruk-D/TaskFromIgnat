import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {
// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value === " " || e.currentTarget.value === "") {
            setError("Введите своё имя")
            setName("")
        } else if (name.length < 3) {    // так и не понял, какую команду использовать по минимальной длине строки
            setError("Минимум 4 символа")
            setName(e.currentTarget.value)
        } else {
            setError('')
            setName(e.currentTarget.value)
        } // need to fix
    }

    const setNameCallbackEnter = (e: React.KeyboardEvent<HTMLInputElement>) => { // need to fix any
        if (name.length > 3) {
            if (e.key === "Enter") {
                alert(`Hello, ${name} !`)
                setName("")
                addUserCallback(name)
            }
        }
    }

    const addUser = () => {
        if (name.length > 3) {
            alert(`Hello, ${name} !`) // need to fix
            setName("")
            addUserCallback(name)
        }
    }

    let totalUsers = users.length// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback} // добавил ()=>
            setNameCallbackEnter={setNameCallbackEnter} // добавил ()=>
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            users={users}
        />
    )
}

export default GreetingContainer
