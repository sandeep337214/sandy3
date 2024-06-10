import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import ValidateEmail from "./ValidateEmail";
import SignIn from "./SignIn";
import LandingPage from "./LandingPage";
import RequestPasswordReset from "./RequesPasswordReset";
import ResetPassword from "./ResetPassword";
import NewLandingPage from "./NewLandingPage";


const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<NewLandingPage />}/>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/validate-email" element={<ValidateEmail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/forgot-password" element={<RequestPasswordReset />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </div>
  );
};

export default App;
