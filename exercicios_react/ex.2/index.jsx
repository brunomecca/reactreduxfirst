import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo } from './component'

//passando um argumento para a funcao do component
ReactDOM.render(
    <div>
        <Primeiro value = "ae" />
        <Segundo />
    </div>
, document.getElementById('app'))