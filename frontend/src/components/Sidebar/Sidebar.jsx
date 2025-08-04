import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [intern, setIntern] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/intern")
      .then((res) => res.json())
      .then((data) => setIntern(data))
      .catch((err) => console.log("Intern fetch error:", err));
  }, []);

  return (
    <div className="w-52 h-screen border-r border-gray-200 shadow-xl">
      <div className="flex flex-col items-center justify-between h-full py-7">
        <div className="flex flex-col items-center">
          <h2 className="mb-10">{intern?.name}</h2>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 rounded-md focus:outline-none cursor-pointer"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/leaderboard")}
              className="px-6 py-2 rounded-md focus:outline-none cursor-pointer"
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
