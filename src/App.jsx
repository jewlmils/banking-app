import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TransactPage from './debit/TransactPage'
import debit from './debit/debit.css'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <TransactPage/>
  )
}

export default App
