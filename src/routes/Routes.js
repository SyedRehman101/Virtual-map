import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutPage from "../pages/About/AboutPage";
import Dao from "../pages/Dao/Dao";
import Collection from "../pages/Faq/Collection";
import CryptoFaq from "../pages/Faq/CryptoFaq";
import CryptoTrade from "../pages/Faq/CryptoTrade";
import FaqsPage from "../pages/Faq/FaqsPage";
import NftToken from "../pages/Faq/NftToken";
import Home from "../pages/Home/Home";
import LandMap from "../pages/LandMap/LandMap";
import NftMarketPage from "../pages/NftMarket/NftMarketPage";
import RoadMap from "../pages/RoadMap/RoadMap";
import Staking from "../pages/Staking/Staking";
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
        path: '/nftmarket',
        element: <NftMarketPage></NftMarketPage>
      },
      {
        path: '/landmap',
        element: <LandMap></LandMap>
      },
      {
        path: '/staking',
        element: <Staking></Staking>
      },
      {
        path: '/dao',
        element: <Dao></Dao>
      },

      {
        path: '/TeamMember',
        element: <Team></Team>
      },
      {
        path: '/faqs',
        element: <FaqsPage></FaqsPage>,
        children: [
          {
            path: '/faqs',
            element: <CryptoFaq></CryptoFaq>
          },
          {
            path: '/faqs/Crypto',
            element: <CryptoFaq></CryptoFaq>
          },
          {
            path: '/faqs/NftToken',
            element: <NftToken></NftToken>
          },
          {
            path: '/faqs/Collection',
            element: <Collection></Collection>
          },
          {
            path: '/faqs/CryptoTrade',
            element: <CryptoTrade></CryptoTrade>
          }
        ]
      }
    ]
  }
])

export default Router;