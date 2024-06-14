import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import ValidateEmail from "./ValidateEmail";
import SignIn from "./SignIn";
import LandingPage from "./LandingPage";
import RequestPasswordReset from "./RequestPasswordReset";
import ResetPassword from "./ResetPassword";
import NewLandingPage from "./NewLandingPage";
import AuthProvider from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PublicRoute><NewLandingPage /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><RegistrationForm /></PublicRoute>} />
        <Route path="/validate-email" element={<PublicRoute><ValidateEmail /></PublicRoute>} />
        <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
        <Route path="/landing" element={<PrivateRoute><LandingPage /></PrivateRoute>} />
        <Route path="/forgot-password" element={<PublicRoute><RequestPasswordReset /></PublicRoute>} />
        <Route path="/reset-password" element={<PublicRoute><ResetPassword /></PublicRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
