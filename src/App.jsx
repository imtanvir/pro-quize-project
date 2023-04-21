import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main/Main';
import QuizeHome from './Components/QuizeHome/QuizeHome';
import Statistics from './Components/Statistics/Statistics';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import QuizeSection from './Components/QuizeHome/QuizeSection/QuizeSection';
import QuizeDetails from './Components/QuizeHome/QuizeDetails/QuizeDetails';
import ChartPage from './Components/Charts/ChartPage/ChartPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <QuizeHome />,
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/take-your-quize/:quizeTopic',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizeTopic}`),
          element: <QuizeDetails></QuizeDetails>
        },
        {
          path: '/statistics', element: <Statistics />,
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        { path: '/blog', element: <Blog /> },
        { path: '/charts', element: <ChartPage></ChartPage> }
      ]
    },
    { path: '*', element: <NotFound /> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
