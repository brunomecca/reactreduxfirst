import React, {Component} from 'react'

class Field extends Component{
    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
        
    }

    handleChange(event){
        this.setState({ value: event.target.value })
    }

    render(){
        return (
            <div>
                <label>{this.state.value}</label><br/>
                <input onChange={(e) => this.handleChange(e)} value={this.state.value} />
            </div> 
        )
    }
}

export default Field

//<input onChange={this.value.handleChange} value={this.state.value}/> nesse caso está passando a função
//onChange espera receber uma função e já manda o parâmetro de evento como padrão
//se estivesse: <input onChange={this.value.handleChange()} value={this.state.value}/>
//então qndo acontecesse onChange iria chamar a função handleChange

//duas maneiras:
// 1: <input onChange={(e) => this.handleChange(e)} value={this.state.value} />
//      sem bind
// 2: <input onChange={this.value.handleChange} value={this.state.value}/>
//      com bind no constructor:
//          this.handleChange = this.handleChange.bind(this)