import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const States = () => {
    const [count, setCount] = useState(0)
    
    const increament = (() => {
        // *setCount(count+1)
        setCount(previousState => previousState + 1)
        setCount(previousState => previousState + 1)
    })

    const decreament = (() => {
        setCount(count - 1)
    })
    return <div>
        <div className="container" style={{ textAlign: 'center', fontSize: '2rem' }}>
            <h1><b>useState </b></h1>
            <Button variant="dark" onClick={increament}>+</Button>
            <span><b>{count}</b></span>
            <Button variant="danger" onClick={decreament}>-</Button>

        </div>
    </div>


}

export default States