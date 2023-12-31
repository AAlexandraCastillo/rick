import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const root=createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>   
  <BrowserRouter>
     <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
