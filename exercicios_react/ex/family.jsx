import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Família</h1>
        {props.children} //sem a propriedade

        { childrenWithProps(props.children, props) }
    </div>
)