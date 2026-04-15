import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import OrderForm from './components/OrderForm'

function App() {
  return (
    <>
    <div>
      <h1> Learning TypeScript</h1>
    </div>
    <div>
      <Counter/>
    </div>
    <div>
      <OrderForm
        onSubmit = {(order) => {
          console.log("Placed:", order.name, order.cups)
        }}
      />
    </div>
    </>
  )
}

export default App
