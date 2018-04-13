import React from 'react'

export default props => (
    <h1> {props.value} First component </h1>
)

export const Segundo = props => (
    <h1>Second component </h1>
)

//não é obrigatório a exportação assim
//export {Primeiro, Segundo}