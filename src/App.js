import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/RootLayout'
import Home from './Pages/Home'
import SinglePageInfo from './Pages/SinglePageInfo'

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },{
          path:'single-page-info/:mov',
          element:<SinglePageInfo/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
