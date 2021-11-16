import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AuthContextProvider } from './context/authContext/AuthContext'
import { ItemContextProvider } from './context/itemContext/ItemContext'
import { TicketContextProvider } from './context/ticketContext/TicketContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ItemContextProvider>
        <TicketContextProvider>
          <App />
        </TicketContextProvider>
      </ItemContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
