import { FaGoogle } from "react-icons/fa";
const GoogleSignInForm = () => {
  return (
    <button
      type="button"
      className="w-full py-2 mt-4 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-200 flex items-center justify-center"
    >
      <FaGoogle className="mr-2" />
      Sign in with Google
    </button>
  );
};

export default GoogleSignInForm;
