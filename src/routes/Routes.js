import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Collection from "../pages/Faq/Collection";
import CryptoFaq from "../pages/Faq/CryptoFaq";
import CryptoTrade from "../pages/Faq/CryptoTrade";
import NftToken from "../pages/Faq/NftToken";
import Home from "../pages/Home/Home";
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
      }
    ]
  }
])

export default Router;