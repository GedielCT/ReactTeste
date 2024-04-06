 import React from "react"

 export const BoaTarde = props => 
    <React.Fragment>
        <h1>Boa Tarde {props.Nome}!</h1>
    </React.Fragment>

 export const BoaNoite = props => <h1>Boa Noite {props.Nome}!</h1>

 export default {BoaTarde, BoaNoite}