import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css-mixins.css'

//Router
import Routes from "./routes/router.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
