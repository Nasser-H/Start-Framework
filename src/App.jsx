import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'

let routers = createBrowserRouter([
  {
  path: '/', element: <Layout/>,children:[
      {index:true  ,element: <Home/> },
      {path: 'about' ,element: <About/> },
      {path: 'portfolio' ,element: <Portfolio/> },
      {path: 'contact' ,element: <Contact/> },
      {path: '*' ,element: <NotFound/> }
    ]
  }
])
export default function App() {

  return <>
      <RouterProvider router={routers}></RouterProvider>
    </>
}
