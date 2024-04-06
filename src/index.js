import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './/componentes/primeiro.jsx'
import BomDia from './/componentes/BomDia.jsx'
import Mult from './/componentes/Multiplos.jsx'

var Nome = 'Matheus'

ReactDOM.render(<Primeiro/>, document.getElementById('comp1'))
ReactDOM.render(<BomDia Nome={Nome}/>, document.getElementById('comp2'))
ReactDOM.render(
    <div>
        <Mult.BoaTarde Nome={Nome}/>
        <Mult.BoaNoite Nome={Nome}/>
    </div>
, document.getElementById('comp3'))