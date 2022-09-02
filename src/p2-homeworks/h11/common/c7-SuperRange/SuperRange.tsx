import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import Slider from "@material-ui/core/Slider";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value: any
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className, value,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const onChangeCallback = (event: any, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number);
    };

    return (
        <>
            <Slider
                value={value}
                aria-labelledby="input-slider"
                style={{width: "300px"}}
                onChange={onChangeCallback}
            />
        </>
    );
}

export default SuperRange;








