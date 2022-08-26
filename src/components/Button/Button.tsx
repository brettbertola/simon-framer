import React,{FC} from 'react'
import {ButtonProps} from "./Button.types"



function Button(props: ButtonProps){
    return (
        <div>
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

export default Button;