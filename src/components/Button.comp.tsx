import { iButtonProps } from "../interfaces/_index"

import '../main.css'

export function Button(props : iButtonProps){
    return <button className="bg-violet-500">{props.title}</button>
}