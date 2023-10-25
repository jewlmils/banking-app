import { useState } from 'react'
import './App.css'
import { Sidebar,Header,Content } from './AdminComponents.jsx'

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
