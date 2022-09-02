import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onDoubleHandler = (ArrayNum: number[]) => {
        setValue1(ArrayNum[0])
        setValue2(ArrayNum[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div>
                    <span>{value1}</span>
                </div>

                <SuperRange
                    onChangeRange={(value) => setValue1(value)}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <span style={{marginLeft: "270px"}}>{value2}</span>
                <SuperDoubleRange
                    onChangeRange={(ArrayNum: number[]) => onDoubleHandler(ArrayNum)}
                    value={[value1, value2]}
                />

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
