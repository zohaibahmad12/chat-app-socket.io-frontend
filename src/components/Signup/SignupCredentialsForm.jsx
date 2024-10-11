import { useForm } from "react-hook-form";
import { signupFormSchema } from "../../schemas/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
const CredentialsForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(signupFormSchema), mode: "onBlur" });

  const onSignupFormSubmit = async (data) => {
    console.log("form submitted", data);
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSignupFormSubmit)}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input {...register("name")} type="text" id="name" className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400" placeholder="Your Name" />
        <p className="text-red-600 text-sm mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          {errors.name && errors.name.message}
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input {...register("email")} type="email" id="email" className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400" placeholder="Your Email" />
        <p className="text-red-600 text-sm mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          {errors.email && errors.email.message}
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <input {...register("password")} type="password" id="password" className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400" placeholder="Your Password" />
        <p className="text-red-600 text-sm mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          {errors.password && errors.password.message}
        </p>
      </div>

      <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200">
        {isSubmitting ? "Signing Up..." : "SignUp"}
      </button>
    </form>
  );
};

export default CredentialsForm;
