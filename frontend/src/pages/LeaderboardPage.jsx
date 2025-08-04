import { Crown, Medal } from "lucide-react";
import { useEffect, useState } from "react";

const LeaderboardPage = () => {
  const [intern, setIntern] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/intern")
      .then((res) => res.json())
      .then((data) => setIntern(data))
      .catch((err) => console.log("Intern fetch error:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/leaderboard")
      .then((res) => res.json())
      .then((data) => setLeaderboard(data))
      .catch((err) => console.log("Leaderboard fetch error:", err));
  }, []);

  return (
    <div className="h-screen w-full bg-white shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Leaderboard</h2>
        <p className="text-gray-600">Top performers this month</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {leaderboard?.map((person, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg ${
                person.name === intern?.name
                  ? "bg-blue-50 border-2 border-blue-200"
                  : "bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm">
                  {person.rank === 1 && (
                    <Crown className="size-5 text-yellow-500" />
                  )}
                  {person.rank === 2 && (
                    <Medal className="size-5 text-gray-400" />
                  )}
                  {person.rank === 3 && (
                    <Medal className="size-5 text-amber-600" />
                  )}

                  {person.rank > 3 && (
                    <span className="text-sm font-semibold text-gray-600">
                      #{person.rank}
                    </span>
                  )}
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      person.name === intern?.name
                        ? "text-blue-800"
                        : "text-gray-800"
                    }`}
                  >
                    {person.name}
                    {person.name === intern?.name && (
                      <span className="ml-2 text-sm text-blue-600">(You)</span>
                    )}
                  </h3>
                  <p>{person.referrals} referrals</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">
                  ${person.donations.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">donations raised</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
