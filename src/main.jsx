import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home';
import Place from './Components/Place/Place.jsx'
import Blogs from './Pages/Blogs.jsx'
import About from './Pages/About.jsx'
import BlogDetails from './Pages/BlogDetails.jsx'

const routes = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
     {
      path: '/blogs',
      element: <Blogs/>
     },
     {
      path: '/places',
      element: <Place/>
     },
     {
      path: '/about',
      element: <About/>
     },
     {
        path: '/blogs/:id',
        element: <BlogDetails/>
     }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
    <App />
    </RouterProvider>
   
  </StrictMode>,
)
