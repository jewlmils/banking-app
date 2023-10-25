import { useState } from 'react'
import './App.css'
import { Sidebar,Header,Content } from './Components.jsx'

function App() {
  return (
    <div className='body'>
      <Sidebar/>
      <main>
      <Header/>
      <Content/>
      </main>
    </div>
  )
}

export default App
