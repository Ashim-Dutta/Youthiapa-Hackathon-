import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollProvider from './components/ScrollProvider'
import { BrowserRouter } from 'react-router-dom'
import ProductContext from './context/ProductContext.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <ScrollProvider>
  <ProductContext>
    <BrowserRouter>
      <App />
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        pauseOnHover 
        theme="light"
      />
    </BrowserRouter>
      </ProductContext>
</ScrollProvider>
)
