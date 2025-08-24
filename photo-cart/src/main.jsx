import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import  ToolBar  from './ToolBar/ToolBar.jsx';
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToolBar />
  </StrictMode>,
)

