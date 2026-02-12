import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'

export const Phone = createContext();

createRoot(document.getElementById('root')).render(

    <Phone.Provider value={123456}>
    <App />
    </Phone.Provider>
 
)
