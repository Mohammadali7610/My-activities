import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MovieMain from './Feature/MovieApp/MovieMain';
import Header from './Feature/MovieApp/header/Header';
import TrendingToday from './Feature/MovieApp/TrendingContainer/Trending';
import Movies from './Feature/MovieApp/MoviesContainer/MoviesContainer';
import SeriesCont from './Feature/MovieApp/SeriesContainer/series';
import Footer from './Feature/MovieApp/footer/footer';
/*import TopHeader  from './Feature/header';
// import { ActivityLevel, Diabetes,Pregnancy, FamilyHistory, FormAbout, HeightWeightComponent, YourGender, Submit } from './Feature/sectionForm';
import "./App.css"
import { HealthForm } from './Feature/sectionForm';*/


const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <TrendingToday />,
    },
    {
    path:"/movies",
    element:<Movies/>
    },
    {
        path: "/series",
        element: <SeriesCont />,
    },
  ])
  

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <div className='main-container'>
 {/* <TopHeader />
 <hr />
 <HealthForm /> */}
 {/* <hr /> */}
      <Header/>
      <RouterProvider router={myRouter}/>
 </div>
 </>
)
