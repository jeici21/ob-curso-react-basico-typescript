import './App.css'
import AxiosExample from './components/pure/AxiosExample'
//import FetchExample from './components/pure/FetchExample'
//import AsyncExample from './components/pure/AsyncExample'
//import ObservableExample from './components/pure/ObservableExample'
//import Father from './components/container/father'
//import Greeting from './components/pure/Greeting'
//import GreetingF from './components/pure/GreetingF'
//import TaskListComponent from './components/container/task_list'
//import LoginFormik from './components/pure/forms/loginFormik'
//import RegisterFormik from './components/pure/forms/registerFormik'
//import OptionalRender from './components/pure/optionalRender'
//import Ejemplo1 from './hooks/Ejemplo1'
//import Ejemplo2 from './hooks/Ejemplo2'
//import MiComponenteConContexto from './hooks/Ejemplo3'
//import Ejemplo4 from './hooks/Ejemplo4'
//import GreetingStyled from './components/pure/greetingStyled'

function App() {

  return (
    <div className="App">
      {/* Componente propio Greeting.jsx */}
      {/* <Greeting name="Martín" /> */}
      {/* Componente de ejemplo funcional */}
      {/* <GreetingF name='Martín' /> */}
      {/* Componente de Listado de Tareas */}
      {/* Ejemplos de uso de HOOKS */}
      {/* <Ejemplo1 /> */}
      {/* <Ejemplo2 /> */}
      {/* <MiComponenteConContexto /> */}
      {/* Todo lo que hay dentro de Ejemplo4, es tratado como props.children */}
      {/* <Ejemplo4 nombre="Martín">
        <h3>Contenido del props.children</h3>
      </Ejemplo4> */}
      {/* <GreetingStyled name='Martín' /> */}
      {/* Gestión de eventos */}
      {/* <Father /> */}
      {/* Ejemplos de Renderizado condicional */}
      {/* <OptionalRender /> */}
      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik /> */}
      {/* <RegisterFormik /> */}
      {/* Ejemplos de procesos asíncronos */}
      {/* <AsyncExample /> */}
      {/* <ObservableExample /> */}
      {/* <FetchExample /> */}
      <AxiosExample />
      {/* PROYECTO FINAL */}
      {/* <TaskListComponent /> */}
    </div>
  )
}

export default App