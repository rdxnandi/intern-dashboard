import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const noSidebarRoutes = ["/login", "/signup"];

  const showSidebar = !noSidebarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex">
      {showSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
