import { useState } from 'react'
import { Header, Footer, Board } from "./components";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Board />
      <Footer />
    </>
  )
}

export default App
