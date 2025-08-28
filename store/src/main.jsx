import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Store from "./Store/Store.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Store />
  </StrictMode>,
)
