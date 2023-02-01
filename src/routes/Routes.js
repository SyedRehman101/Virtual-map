import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import AboutPage from "../pages/About/AboutPage";
import Collection from "../pages/Faq/Collection";
import CryptoFaq from "../pages/Faq/CryptoFaq";
import CryptoTrade from "../pages/Faq/CryptoTrade";
import Faq from "../pages/Faq/Faq";
import NftToken from "../pages/Faq/NftToken";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Projects from "../pages/Projects/Projects";
import RoadMap from "../pages/RoadMap/RoadMap";
import Speciality from "../pages/Speciality/Speciality";
import Team from "../pages/Team/Team";
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/Crypto',
            element: <CryptoFaq></CryptoFaq>
          },
          {
            path: '/',
            element: <CryptoFaq></CryptoFaq>
          },
          {
            path: '/NftToken',
            element: <NftToken></NftToken>
          },
          {
            path: '/Collection',
            element: <Collection></Collection>
          },
          {
            path: '/CryptoTrade',
            element: <CryptoTrade></CryptoTrade>
          }
        ]
      },
      {
        path: '/about',
        element: <AboutPage></AboutPage>,
      },
      {
        path: '/Speciality',
        element: <Speciality></Speciality>
      },
      {
        path: '/Portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path: '/Projects',
        element: <Projects></Projects>
      },
      {
        path: '/RoadMap',
        element: <RoadMap></RoadMap>
      },
      {
        path: '/TeamMember',
        element: <Team></Team>
      },
      {
        path: '/Faqs',
        element: <Faq></Faq>
      }
    ]
  }
])

export default Router;