import React, { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FilterSection from "./components/FilterBar/FilterBar";
import Home from "./pages/Home";
import PostsProvider from "./context/PostProvider";

// Lazy load modals
const LoginModal = React.lazy(() => import("./components/Login/LoginModel"));
const MobileLoginModel = React.lazy(() =>
  import("./components/Login/MobileLoginModel")
);
const SignupModal = React.lazy(() => import("./components/signup/SignupModal"));
const MobileSignupModal = React.lazy(() =>
  import("./components/signup/MobileSignupModal")
);

const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false); // Track if user is signed up
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <PostsProvider>
      <Router>
        <Header isSignedUp={isSignedUp} />
        <HeroSection />
        <FilterSection />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={isMobile ? <MobileLoginModel /> : <LoginModal />}
            />
            <Route
              path="/signup"
              element={
                isMobile ? (
                  <MobileSignupModal setIsSignedUp={setIsSignedUp} />
                ) : (
                  <SignupModal setIsSignedUp={setIsSignedUp} />
                )
              }
            />
            <Route path="/:category" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </PostsProvider>
  );
};

export default App;
