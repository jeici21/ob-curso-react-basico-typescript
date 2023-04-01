import './App.css'
import Clock from './components/Clock'
import ClockHook from './components/ClockHook'
import ContactoList from './components/ContactoList'
import Cuadrado from './components/Cuadrado'
import TareasFormik from './components/TareasFormik'

function App() {

  return (
    <div className="App">
      <ContactoList />
      <Clock />
      <ClockHook />
      <Cuadrado />
      <TareasFormik />
    </div>
  )
}

export default App
