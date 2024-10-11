import CredentialsForm from "../components/Signup/SignupCredentialsForm";
import GoogleSignInForm from "../components/Signup/GoogleSignInForm";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4 sm:px-0">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
        <CredentialsForm />

        <div className="flex items-center justify-center mt-6">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-4 text-gray-400">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <GoogleSignInForm />

        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
