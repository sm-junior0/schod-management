import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "../styles/global.css";

export const AuthPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentCode: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [activeRole, setActiveRole] = useState("admin");

  // Dummy credentials
  const dummyData = {
    studentCode: "test",
    password: "123",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.studentCode === dummyData.studentCode &&
      formData.password === dummyData.password
    ) {
      setSuccess("Login successful!");
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid student code or password");
      setSuccess("");
    }
  };

  const handleRoleNavigation = (role) => {
    setActiveRole(role);
    switch (role) {
      case "student":
        navigate("/student/login");
        break;
      case "Teacher":
        navigate("/teacher/teacherLogin");
        break;
      case "sadmin":
        navigate("/sadmin/auth");
        break;
      case "admin":
      default:
        navigate("/dashboard");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          School Account Login
        </h1>
        <p className="text-center text-gray-600 text-sm mb-6">
          Please enter your details below to access your account.
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          {[
            { role: "admin", label: "Admin" },
            { role: "sadmin", label: "Super Admin" },
            { role: "student", label: "Student" },
            { role: "Teacher", label: "Teacher" },
          ].map(({ role, label }) => (
            <button
              key={role}
              onClick={() => handleRoleNavigation(role)}
              className={`p-4 rounded-full w-24 text-center transition-all ${
                activeRole === role
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="studentCode"
              value={formData.studentCode}
              onChange={handleChange}
              placeholder="Admin username"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember Me</span>
            </label>
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Forgot my password
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            LOGIN
          </button>
          <div mt-4 className="text-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Back Home
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-gray-600 leading-relaxed">
          If you encounter issues logging in, please contact support.
        </p>
        <button className="text-sm text-blue-600 hover:text-blue-800 mt-2">
          Read more
        </button>
      </div>
    </div>
  );
};
