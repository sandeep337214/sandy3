import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import ValidateEmail from "./ValidateEmail";
import SignIn from "./SignIn";
import LandingPage from "./LandingPage";
import RequestPasswordReset from "./component/RequesPasswordReset";
import ResetPassword from "./ResetPassword";
import NewLandingPage from "./NewLandingPage";
import AuthProvider from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/Newlanding" element={<NewLandingPage />} />
        <Route path="/register" element={<PublicRoute element={<RegistrationForm />} />} />
        <Route path="/validate-email" element={<ValidateEmail />} />
        <Route path="/signin" element={<PublicRoute element={<SignIn />} />} />
        <Route path="/" element={<PrivateRoute element={<LandingPage />} />} />
        <Route path="/forgot-password" element={<RequestPasswordReset/>}/>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
