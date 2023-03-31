import './App.css'
import Clock from './components/Clock'
import ClockHook from './components/ClockHook'
import ContactoList from './components/ContactoList'
import Cuadrado from './components/Cuadrado'

function App() {

  return (
    <div className="App">
      <ContactoList />
      <Clock />
      <ClockHook />
      <Cuadrado />
    </div>
  )
}

export default App
