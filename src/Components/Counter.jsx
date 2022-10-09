import React from 'react'
import { useState } from 'react'
import { store } from '../Redux/store'
import CounterButton from './CounterButton'

const Counter = () => {
  const {count} = store.getState()
  const {subscribe} =store
  const [update, setUpdate ] = useState(0);

        subscribe(()=>{
            setUpdate((prev)=>prev+1)
           
        })

  return (
    <div>
       <h1>Counter - {count}</h1>
       <CounterButton />
    </div>
  )
}

export default Counter
