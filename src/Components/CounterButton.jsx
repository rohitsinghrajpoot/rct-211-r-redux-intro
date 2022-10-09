import React from 'react'
// import { useState } from 'react'
import { handleAdd, handleReduce } from '../Redux/action'
import { store } from '../Redux/store'

const CounterButton = () => {
    const {dispatch} = store
    
  return (
    <div>
       <button onClick={()=>{dispatch(handleAdd(1))}}>Add</button>
       <button onClick={()=>{dispatch(handleReduce(2))}}>Reduce</button>
    </div>
  )
}

export default CounterButton
