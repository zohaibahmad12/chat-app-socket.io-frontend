import OrSeparatorLine from "../components/global/orSeparatorLine";
import LoginCredentialsForm from "../components/Login/LoginCredentialsForm";
import GoogleSignInForm from "../components/Signup/GoogleSignInForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4 sm:px-0">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <LoginCredentialsForm />
        <OrSeparatorLine />
        <GoogleSignInForm />
        <p className="mt-4 text-sm text-center text-gray-400">
          New user?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
