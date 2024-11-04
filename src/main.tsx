import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import { FiltersProvider } from './context/filters'

createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
