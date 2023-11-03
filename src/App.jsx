import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TransactPage from './components/TransactPage'
import debit from './style/debit.css'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TransactPage transactionType="withdraw" />
    </div>
  )
}

export default App
