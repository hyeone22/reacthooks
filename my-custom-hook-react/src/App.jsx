import { useState } from 'react'
import './App.css'

export default function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  
  return (
    <div>
      <h2>Hello! {item}</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
      
    </div>
  )
}

