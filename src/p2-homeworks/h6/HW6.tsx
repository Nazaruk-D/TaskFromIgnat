import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        // let valueAsString = localStorage.getItem('editable-span-value')
        // if (valueAsString) {
        //     let newMaxValue = JSON.parse(valueAsString)
        //     setValue(newMaxValue)
        // }
        // debugger
        // restoreState<string>('editable-span-value', value)
        setValue(restoreState<string>('editable-span-value', value))
    }
    const enterText = ' enter text...'
    return (
        <div>
            <hr/>
            <h2> homeworks 6</h2>

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : enterText}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
