import React, { Component } from 'react'

export default class ClassComponent extends Component{
    //função obrigatória por causa do extends
    render(){
        return (
            <h1>{ this.props.value }</h1>
        )
    }
}