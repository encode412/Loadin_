import { AboutPage, BecomeADriver, Homepage, LoginPage, SignupPage, SupportPage, Dashboard } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/driver" element={<BecomeADriver />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
      <Route path="/go/pickup" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
