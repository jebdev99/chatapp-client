import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { CssBaseline } from '@mui/material'

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { Layout } = await import("./pages/Layout.tsx");
      return { Component: Layout }
    },
    children: [
      // {
      //   index: true,
      //   async lazy() {
      //     const { Component } = await import("./pages/Landing.tsx");
      //     return { Component }
      //   }
      // },
      {
        // path: "login",
        index: true,
        async lazy() {
          const { Component } = await import("./pages/Login.tsx");
          return {
            Component,
          }
        },
      },
      {
        path: "chat",
        async lazy() {
          const { Component } = await import("./pages/Chat.tsx");
          return {
            Component,
          }
        }
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>,
)