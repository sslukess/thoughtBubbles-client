import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//Router
import Routes from "./routes/router.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
