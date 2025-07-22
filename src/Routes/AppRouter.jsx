import { lazy } from 'react';
import { Routes, Route,useLocation} from 'react-router-dom';
import { AnimatePresence} from 'framer-motion'
import StoryDetails from '../components/StoryDetails';
const RaisedRight = lazy(()=>import('../pages/RaisedRight'));
const Checkout = lazy(()=>import('../pages/Checkout'));
const LoginPage = lazy(()=>import('../pages/LoginForm'))
const RegisterPage = lazy(()=>import('../pages/RegisterForm'));
const Home = lazy(()=>import('../pages/Home'));
const BBMerchandise = lazy(()=>import('../pages/BBMerchandise'));
const RaisedRightElite = lazy(()=>import('../pages/RaisedRightElite'));
const ProductDetails = lazy(() => import('../pages/ProductDetails')) 
const PageNotFound = lazy(() => import('../pages/PageNotFound')) 
const AppRouter = () => {
  const location = useLocation()
  return (


      <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/BBMerchandise" element={<BBMerchandise />} />
            <Route path="/BBMerchandise/details/:id" element={<ProductDetails />} />
            <Route path="/RaisedRightElite" element={<RaisedRightElite />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/raisedright" element={<RaisedRight />} />
            <Route path="/storydetails" element={<StoryDetails />} />
            <Route path="/BBMerchandise/details/:id/checkout/:id" element={<Checkout />} />
            <Route path="*" element={ <PageNotFound/>} />

        </Routes>
          </AnimatePresence>
    </div>
  )
}

export default AppRouter