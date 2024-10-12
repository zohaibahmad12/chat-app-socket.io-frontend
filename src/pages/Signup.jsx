import SignUpCredentialsForm from "../components/Signup/SignupCredentialsForm";
import GoogleSignInForm from "../components/Signup/GoogleSignInForm";
import OrSeparatorLine from "../components/global/orSeparatorLine";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4 sm:px-0">
      <div className="bg-gray-900 rounded-lg shadow-lg px-8 py-4 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
        <SignUpCredentialsForm />
        <OrSeparatorLine />
        <GoogleSignInForm />
        <p className="mt-2 text-sm text-center text-gray-400">
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
