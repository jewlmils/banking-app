import { useState } from 'react'
import './App.css'
import {Sidebar} from './components/Sidebar.jsx'
import {Header} from './components/Header.jsx'
import {Content} from './components/Content.jsx'

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
