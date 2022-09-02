import React from 'react'
import Slider from "@material-ui/core/Slider";
import {makeStyles} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const classes = useStyles();


    const handleChange = (event: any, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[]);
    };

    return (
        <>
            <div className={classes.root}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"

                />
            </div>
        </>
    )
}

export default SuperDoubleRange
