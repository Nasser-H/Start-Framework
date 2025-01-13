import { createRoot } from 'react-dom/client'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
