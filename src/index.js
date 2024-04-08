import React from 'react'
import ReactDOM from 'react-dom'

import Saudacoes from './componentes/SaudacoesGerais.jsx'

import Pai from './componentes/Pai.jsx'
import Filho from './componentes/Filho.jsx'

ReactDOM.render(
    <div>
        <Pai nome='Paulo' sobrenome='Teixeira'>
            <Filho nome='Fernanda'/>
            <Filho nome='Leonardo'/>
            <Filho nome='Andrio'/>
        </Pai>
    </div>
, document.getElementById('comp1'))


ReactDOM.render(
    <div>
        <Saudacoes Nome='Nome'/>
    </div>
, document.getElementById('comp2'))