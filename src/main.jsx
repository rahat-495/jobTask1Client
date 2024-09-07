
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from './Auth/AuthProvider';
import {QueryClientProvider , QueryClient} from '@tanstack/react-query'
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import ContextProvider from './ProductContext/ProductContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ContextProvider>
          <QueryClientProvider client={new QueryClient()}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ContextProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
