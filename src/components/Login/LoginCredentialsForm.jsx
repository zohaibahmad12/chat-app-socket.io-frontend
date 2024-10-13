import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../schemas/formSchemas";
import axios from "axios";
import CustomToast from "../global/CustomToast";
import { TailSpin } from "react-loader-spinner";
import { setToken } from "../../../utils/localStorage";
import useUserStore from "../../store/useUserStore";
import { useNavigate } from "react-router-dom";
const LoginCredentialsForm = () => {
  const setSessionToken = useUserStore((state) => state.setSessionToken);
  const setIsAuthenticated = useUserStore((state) => state.setIsAuthenticated);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(loginFormSchema), mode: "onBlur" });

  const onLoginFormSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/user/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Login successful:", response.data);
      setIsAuthenticated(true);
      setSessionToken(response.data.token);
      setUser(response.data.user);
      setToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      setError("root", { message: error.response.data.message });
    }
  };
  return (
    <form className="mt-6" onSubmit={handleSubmit(onLoginFormSubmit)}>
      {errors.root && <CustomToast message={errors.root.message} />}
      <div className="mb-3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white text-sm placeholder-gray-400"
          placeholder="Your Email"
        />
        <p className="text-red-600 text-xs mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          {errors.email && errors.email.message}
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          id="password"
          className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white text-sm placeholder-gray-400"
          placeholder="Your Password"
        />
        <p className="text-red-600 text-xs mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          {errors.password && errors.password.message}
        </p>
      </div>

      <button type="submit" className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-600 rounded-md" disabled={isSubmitting}>
        {isSubmitting ? <TailSpin height={24} width={24} color="#ffffff" ariaLabel="tail-spin-loading" radius="1" visible={true} /> : "Login"}
      </button>
    </form>
  );
};

export default LoginCredentialsForm;
