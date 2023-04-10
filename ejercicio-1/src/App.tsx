import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { TaskProvider } from './components/containers/Context'
import { Action } from './store/types/types'
//import Clock from './components/Clock'
//import ClockHook from './components/ClockHook'
//import ContactoList from './components/ContactoList'
//import Cuadrado from './components/Cuadrado'
//import TareasFormik from './components/TareasFormik'

function App() {
  return (
    <div className="App">
      <TaskProvider state={{ tasks: [], filteredTasks: [] }} dispatch={function (value: Action): void {
        throw new Error('Function not implemented.')
      }}>
        {/* <ContactoList /> */}
        {/* <Clock /> */}
        {/* <ClockHook /> */}
        {/* <Cuadrado /> */}
        {/* <TareasFormik /> */}
        {/* <AxiosMaterial /> */}
        {/* <TodoContainer /> */}
        {/* <TodoFormContainer /> */}
        <TaskForm />
        <TaskList />
      </TaskProvider>
    </div>
  )
}

export default App
