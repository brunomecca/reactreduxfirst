import React, { Component } from 'react'

export default class ClassComponent extends Component{
    constructor(props){
        //super obrigatório
        super(props)
        //state vem de component
        //state vai receber um objeto que contém um atributo value
        //o atributo value vai receber o valor setado em initialValue na chamada deste Component
        this.state = { value: props.initialValue }
    }

    sum(delta){
        this.setState({ value: this.state.value + delta})
    }
    
    //método obrigatória por causa do extends
    render(){
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        )
    }
}

 //no button, se estivesse: <button onClick={sum(-1)}> a função retornaria undefined, ficando: <button onClick={undefined}>