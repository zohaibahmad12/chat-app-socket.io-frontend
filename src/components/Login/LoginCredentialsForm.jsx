import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../schemas/formSchemas";
const LoginCredentialsForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(loginFormSchema), mode: "onBlur" });

  const onLoginFormSubmit = (data) => {
    console.log("form submitted", data);
  };
  return (
    <form className="mt-6" onSubmit={handleSubmit(onLoginFormSubmit)}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input {...register("email")} type="email" id="email" required className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400" placeholder="Your Email" />

        <p className="text-red-600 text-sm mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          {errors.email && errors.email.message}
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <input {...register("password")} type="password" id="password" required className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400" placeholder="Your Password" />
        <p className="text-red-600 text-sm mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          {errors.password && errors.password.message}
        </p>
      </div>

      <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200">
        {isSubmitting ? "Logging In..." : "Login"}
      </button>

      <div className="flex items-center justify-center mt-6">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400">or</span>
        <hr className="flex-grow border-gray-600" />
      </div>
    </form>
  );
};

export default LoginCredentialsForm;
