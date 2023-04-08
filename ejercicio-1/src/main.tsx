import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createAppStore } from './store/config/storeConfig'
import { Provider } from 'react-redux'
//import App2 from './App2'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={createAppStore()}>
    <React.StrictMode>
      <App />
      {/* <App2 /> */}
    </React.StrictMode>
  </Provider>,
)
