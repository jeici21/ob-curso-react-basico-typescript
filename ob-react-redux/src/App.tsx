import './App.css'
import TodoContainer from './components/containers/TodoContainer'
import TodoFormContainer from './components/containers/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions'

function App() {
  return (
    <div className="App">
      <TodoContainer />
      <TodoFormContainer />
      {/* Filter Options contain Filter Container */}
      <FilterOptions />
    </div>
  )
}

export default App