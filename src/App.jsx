import { Header, Footer, Board } from "./components";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Board size={5}/>
      <Footer />
    </>
  )
}

export default App
