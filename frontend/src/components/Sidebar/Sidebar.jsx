import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

const Header = () => {
  const [intern, setIntern] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/intern")
      .then((res) => res.json())
      .then((data) => setIntern(data))
      .catch((err) => console.log("Intern fetch error:", err));
  }, []);

  return (
    <div className="w-52 min-h-screen border-r border-gray-200 shadow-xl">
      <div className="flex flex-col items-center justify-between h-full py-7">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-fit p-1 rounded-full bg-gray-400 text-white">
              <User />
            </div>
            <h2 className="text-sm">{intern?.name}</h2>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate("/")}
              className={`px-4 py-2 w-full focus:outline-none cursor-pointer  text-left rounded-md ${
                location.pathname === "/" ? "border-b-2 border-indigo-500" : ""
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/leaderboard")}
              className={`px-4 py-2 w-full focus:outline-none cursor-pointer text-left rounded-md ${
                location.pathname === "/leaderboard"
                  ? "border-b-2 border-indigo-500"
                  : ""
              }`}
            >
              Leaderboard
            </button>
          </div>
        </div>

        <nav>
          <button
            onClick={() => navigate("/login")}
            className="border border-gray-500 rounded-md px-6 py-2 cursor-pointer focus:outline-none"
          >
            Login
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
