import React from "react"
import {beautifulDay, godMorning, Saudacao} from './Saudacoes.jsx'

export default props => 
    <div>
        <ul>
            {beautifulDay(props)}
            {godMorning(props)}
            {Saudacao(props)}
        </ul>
    </div>