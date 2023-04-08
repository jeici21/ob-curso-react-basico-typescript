import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'
//Redux Imports:
import { Provider } from 'react-redux'
//Import Config Function of App Store
import { createAppAsyncStore, /*createAppStore*/ } from './store/config/storeConfig'
import AppReduxSaga from './AppReduxSaga'

//We create the App Store
// let appStore = createAppStore()
let appAsyncStore=createAppAsyncStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>,
)