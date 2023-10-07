import React from 'react'
import ReactDOM from "react-dom/client";  
import Header from './header/Header'
import "./MoviesMain.css"
import TrendingToday from './TrendingContainer/Trending'
import Footer from './footer/footer'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from './MoviesContainer/MoviesContainer';
import SeriesCont from './SeriesContainer/series';

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <TrendingToday />,
  }
])

export default function MovieMain() {
  return (
    <div className='movieMainCont'>
      <Header/>
      <TrendingToday/>
      <Movies/>
      <SeriesCont/>
      <Footer/>
    </div>
  )
}
