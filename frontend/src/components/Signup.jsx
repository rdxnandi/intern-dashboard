import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white shadow-md border border-gray-300 px-7 py-4 rounded-md w-[400px]">
        <div className="text-center space-y-3 mb-7">
          <h1 className="text-xl font-semibold tracking-wide">Join Us</h1>
          <p className="text-lg text-gray-600 tracking-wide">
            Create your intern account
          </p>
        </div>

        <form className="space-y-7">
          <div className="flex flex-col space-y-2">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formDetails.fullName}
              onChange={(e) =>
                setFormDetails({ ...formDetails, fullName: e.target.value })
              }
              placeholder="Full Name"
              className="border border-gray-500 px-4 py-2 rounded-md focus:outline-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formDetails.email}
              onChange={(e) =>
                setFormDetails({ ...formDetails, email: e.target.value })
              }
              placeholder="Email"
              className="border border-gray-500 px-4 py-2 rounded-md focus:outline-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password">Password</label>
            <div className="relative border border-gray-500 rounded-md flex items-center">
              <input
                id="password"
                name="password"
                type="password"
                value={formDetails.password}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, password: e.target.value })
                }
                placeholder="Password"
                className="p-2 focus:outline-none w-[80%]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="w-[20%] focus:outline-none p-2 flex items-center justify-center text-gray-500 cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-500 px-4 py-2 rounded-md text-white cursor-pointer focus:outline-none"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6">
          <p>
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="focus:outline-none hover:underline cursor-pointer"
            >
              Sing in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
