import React, { Component } from "react"

export default class Saudacao extends Component{

    state = {
        Tipo: this.props.Tipo,
        Nome: this.props.Nome
    }

    setTipo(e){
        this.setState({Tipo: e.target.value})
    }

    setNome(e){
        this.setState({Nome: e.target.value})
    }

    render(){
        const {Tipo, Nome} = this.state
        return(
            <div>
                <h1>{Tipo} {Nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                    value={Tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..."
                    value={Nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}