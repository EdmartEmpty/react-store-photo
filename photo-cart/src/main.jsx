import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
 
import  ToolBar  from './ToolBar/ToolBar.jsx';
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToolBar />
  </StrictMode>,
)

