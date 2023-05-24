import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardsCarousel from './Extra/slider'
import './App.css'
import Header from './bars/header'
import Discover from './Extra/discover'
import Signup from './ProfileManagement/signup'
import Signin from './ProfileManagement/signin'
import ForgetPassword from './ProfileManagement/recoverpass'
import ForgotPassword from './ProfileManagement/forgotpass'
import Verification from './ProfileManagement/verifyCode'
import ChangePassword from './ProfileManagement/changepassword'
import Update from './ProfileManagement/updateprofile'
import UserInformationPage from './ProfileManagement/viewProfile'
import SignupGoogle from './ProfileManagement/signupGoogle'
import BusinessOwnerView from './businessOwner/businessOwnerPage'
import FaqWithImage from './businessOwner/faqs'
import BusinessOwnerUpdate from './businessOwner/BusinessOwnerUpdate'
import BusinessOwnerUpdateAgain from './businessOwner/BusinessOwnerUpdateAgain'
import UsersTable from './businessOwner/ViewBusinessOwner'
import AddBusiness from './business/AddBusiness'
import ViewBusiness from './business/ViewBusiness'
import UpdateBusiness from './business/UpdateBusiness'
import BusinessOwnerHeader from './bars/BusinessOwnerHeader'
import BusinessQuestion from './BusinessQuestionnaire/BusinessQuestion'
import UpdateQuestion from './BusinessQuestionnaire/UpdateQuestion'
import UpdateAgents from './MarketingAgents/UpdateAgents'
import NavbarNested from './bars/Navbar'
import Subscription from './subscription/subscribe'
import Agents from './MarketingAgents/Agents'
import AgentCards from './MarketingAgents/AgentCards'
import PaymentForm from './subscription/payment'
import FaqWithBg from './Ima/Aboutus'
import EmailBanner from './Ima/Services'
import ContactIcons from './Ima/Contactus'
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'

function App() {
  return (
    <>
    {/*
    <Header />
    <CardsCarousel />
    <Discover />
  */}
  <Router>
    <Routes>
    <Route exact path='/' element={<Signin />}></Route>
    <Route exact path='/BusinessHeader' element={<BusinessOwnerHeader />}></Route>
    <Route exact path='/SignUp' element={<Signup />}></Route>
    <Route exact path='/SignIn' element={<Signin />}></Route>
    <Route exact path='/ForgetPassword' element={<ForgetPassword />}></Route>
    <Route exact path='/ForgotPassword' element={<ForgotPassword />}></Route>
    <Route exact path='/ChangePassword' element={<ChangePassword />}></Route>
    <Route exact path='/Verification' element={<Verification />}></Route>
    <Route exact path='/Update' element={<Update />}></Route>
    <Route exact path='/UserInformationPage' element={<UserInformationPage />}></Route>
    <Route exact path='/SignupGoogle' element={<SignupGoogle />}></Route>
    <Route exact path='/BusinessQuestion' element={<BusinessQuestion />}></Route>
    <Route exact path='/UpdateQuestion' element={<UpdateQuestion />}></Route>
    <Route exact path='/UpdateAgent' element={<UpdateAgents />}></Route>
    <Route exact path='/NavbarNested' element={<NavbarNested />}></Route>
    <Route exact path='/Header' element={<Header />}></Route>
    <Route exact path='/Subscription' element={<Subscription />}></Route>
    <Route exact path='/Faq' element={<FaqWithImage />}></Route>
    <Route exact path='/Agents' element={<Agents />}></Route>
    <Route exact path='/AgentCards' element={<AgentCards />}></Route>
    <Route exact path='/PaymentForm' element={<PaymentForm />}></Route>
    <Route exact path='/BusinessOwnerView' element={<BusinessOwnerView />}></Route>
    <Route exact path='/AddBusiness' element={<AddBusiness />}></Route>
    <Route exact path='/UpdateBusiness' element={<UpdateBusiness />}></Route>
    <Route exact path='/ViewBusiness' element={<ViewBusiness />}></Route>
    <Route exact path='/UsersTable' element={<UsersTable />}></Route>
    <Route exact path='/BusinessOwnerUpdate' element={<BusinessOwnerUpdate />}></Route>
    <Route exact path='/BusinessOwnerUpdateAgain' element={<BusinessOwnerUpdateAgain />}></Route>
    <Route exact path='/FaqWithBg' element={<FaqWithBg />}></Route>
    <Route exact path='/EmailBanner' element={<EmailBanner />}></Route>
    <Route exact path='/ContactIcons' element={<ContactIcons />}></Route>
    </Routes>
  </Router>
  
    </>
  )
}

export default App
