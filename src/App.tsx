import { useState } from 'react'
import SubscriptionConfig from './components/SubscriptionMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SubscriptionConfig/>
    </>
  )
}

export default App
