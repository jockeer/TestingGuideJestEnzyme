import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {

    const [ counter, setCounter ] = useState(value)

    const sumar = (e) => {
        setCounter(counter+1)
    }
    const reset = (e) => {
        setCounter(value)
    }
    const restar = (e) => {
        setCounter(counter-1)
    }

    return ( 
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={ sumar } >+1</button>
        <button onClick={ reset } >reset</button>
        <button onClick={ restar } >-1</button>
        </>
     );
}

CounterApp.propTypes = {
    value: PropTypes.number
}
 
export default CounterApp;