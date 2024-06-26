import {
  AboutPage,
  BecomeADriver,
  Homepage,
  LoginPage,
  SignupPage,
  SupportPage,
  Dashboard,
} from "./pages";
import VerificationSentScreen from "./pages/auth/signup/_components/verification-sent";
import { Route, Routes } from "react-router-dom";
import { AvailableVehicles, PostBid } from "./pages/dashboard/_components";
import {
  BidsPage,
  JobDashboard,
} from "./pages/dashboard/_components/post-bid/_components";
import LoadWallet from "./pages/dashboard/_components/loadwallet";
import LoadMatching from "./pages/dashboard/_components/load-matching";

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
        <Route path="verification-sent" element={<VerificationSentScreen />} />
      </Route>
      <Route path="/go/pickup">
        <Route path="/go/pickup" element={<Dashboard />} />
        <Route path="post-bid" element={<PostBid />} />
        <Route path="load-wallet" element={<LoadWallet />} />
        <Route path="load-matching" element={<LoadMatching />} />
        <Route path="post-bid/dashboard" element={<JobDashboard />} />
        <Route path="post-bid/dashboard/bids" element={<BidsPage />} />
        <Route path="available-vehicles" element={<AvailableVehicles />} />
      </Route>
    </Routes>
  );
}

export default App;
