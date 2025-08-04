import { IndianRupee, Users } from "lucide-react";
import { rewards } from "../../constants";
import { useEffect, useState } from "react";

const InternDashboard = () => {
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/intern")
      .then((res) => res.json())
      .then((data) => setIntern(data))
      .catch((err) => console.log("Intern fetch error:", err));
  }, []);

  if (!intern) return <p className="p-10">Loading intern data....</p>;

  return (
    <div className="h-full w-full space-y-6 md:p-10 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Donations
              </p>
              <p className="text-3xl font-bold text-green-600">
                ₹{intern.totalDonations.toLocaleString()}
              </p>
            </div>
            <IndianRupee className="size-12 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Referrals</p>
              <p className="text-3xl font-bold text-blue-600">
                {intern.referralCode}
              </p>
            </div>
            <Users className="size-12 text-blue-500" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Rewards & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward) => {
            const IconComponent = reward.icon;

            return (
              <div
                key={reward.id}
                className={`p-4 rounded-lg border-2 ${
                  reward.earned
                    ? "border-green-200 bg-green-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent
                    className={`h-8 w-8 ${
                      reward.earned ? "text-green-600" : "text-gray-400"
                    }`}
                  />
                  <div>
                    <h3
                      className={`font-semibold ${
                        reward.earned ? "text-green-800" : "text-gray-600"
                      }`}
                    >
                      {reward.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        reward.earned ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {reward.description}
                    </p>
                  </div>
                  {reward.earned && (
                    <div className="ml-auto">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Earned
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InternDashboard;
