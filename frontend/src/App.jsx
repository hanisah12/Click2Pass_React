import React from 'react'
import { Routes,Route } from 'react-router-dom'

import FormPage from './pages/FormPage'
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import EditProfile from './pages/EditProfile'
import LoginPage from './pages/LoginPage'
import MyPasses from './pages/MyPasses'
import ProfilePage from './pages/ProfilePage'
import SignupPage from './pages/SignupPage'
import SuccessPage from './pages/SuccessPage'
import ViewPass from './pages/ViewPass'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/form" element={<FormPage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/edit-profile" element={<EditProfile/>}/>
      <Route path="/my-passes" element={<MyPasses/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/success" element={<SuccessPage/>}/>
      <Route path="/view-pass" element={<ViewPass/>}/>
    </Routes>

    // <div>
    //   <LandingPage/>
    //   <FormPage/>
    //   <ContactPage/>
    //   <EditProfile/>
    //   <LoginPage/>
    //   <MyPasses/>
    //   <ProfilePage/>
    //   <SignupPage/>
    //   <SuccessPage/>
    //   <ViewPass/>
    // </div>
  )
}

export default App