import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context/Context.jsx'
import 'react-toastify/dist/ReactToastify.css';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // for snow theme
import 'react-quill/dist/quill.bubble.css'; // for snow theme


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
    <App />
    </Context>
    </BrowserRouter>
  </React.StrictMode>,
)
