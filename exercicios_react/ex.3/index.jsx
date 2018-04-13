import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Dois">
        <Member name="Um" />
        <Member name="Três"/>
        <Member name="Quatro"/>
    </Family>
    , document.getElementById("app")
)

