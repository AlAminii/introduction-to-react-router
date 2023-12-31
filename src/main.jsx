 
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import React from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,

    children : [
    {
      path: "/about",
      element : <About></About>
    },
    {
      path: 'contact',
      element: <Contact></Contact>
    },
    {
      path: '/users',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element: <Users></Users>
    },
    {
      path : '/posts',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>
    },
    {
      path: '/post/:postId',
      loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`), // Use `${}` to interpolate the postId
      element: <PostDetails />
    }
    
    ]
  },


])

  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
