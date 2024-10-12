import { useForm } from "react-hook-form";
import { signupFormSchema } from "../../schemas/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { TailSpin } from "react-loader-spinner";
import CustomToast from "../global/CustomToast";
import axios from "axios";
const SignUpCredentialsForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(signupFormSchema), mode: "onBlur" });

  const onSignupFormSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/user/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Error during signup:", error.message);
      setError("root", { message: "Something went wrong" });
    }
  };
  console.log("errors", errors);
  return (
    <form className="mt-4" onSubmit={handleSubmit(onSignupFormSubmit)}>
      {errors.root && <CustomToast message={errors.root.message} />}
      <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white text-sm placeholder-gray-400"
          placeholder="Your Name"
        />
        <p className="text-red-600 text-xs mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          {errors.name && errors.name.message}
        </p>
      </div>

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

      <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200">
        {isSubmitting ? <TailSpin height={24} width={24} color="#ffffff" ariaLabel="tail-spin-loading" radius="1" visible={true} /> : "SignUp"}
      </button>
    </form>
  );
};

export default SignUpCredentialsForm;
