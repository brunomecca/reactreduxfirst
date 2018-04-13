import React from 'react'

//por padrão na arrow function tudo que vem depois é retornado


//forma 2:
export default props => (
    <h1>{props.value}</h1>
)

//forma 1:
// export default (props) => (
//     <h1>{props.value}</h1>
// )

//forma padrao
// function ae () {
//     console.log()
// }

//function ae (props) {}
//props => {return ()}
//props => ()
