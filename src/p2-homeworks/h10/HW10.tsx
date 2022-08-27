import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, statePropsType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from "./HW10.module.css"
import {CircleLoader} from "react-spinners";

function HW10() {
    // useSelector, useDispatch
    let loading = useSelector<AppStoreType>(state => state.loading.isLoading)
    console.log(loading)
    const dispatch = useDispatch()
    useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.loadingDiv}>
                        <div>
                            <CircleLoader color={"#000000"} size={50} />
                        </div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
