import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'react-quill/dist/quill.snow.css';

createRoot(document.getElementById('rn_editor')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
