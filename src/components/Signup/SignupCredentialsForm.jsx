const CredentialsForm = () => {
  return (
    <form className="mt-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
          placeholder="Your Name"
        />
        <p className="text-red-600 text-sm mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          Name is required
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
          placeholder="Your Email"
        />
        <p className="text-red-600 text-sm mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          Email is required
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
          placeholder="Your Password"
        />
        <p className="text-red-600 text-sm mt-1 transition-opacity duration-300" style={{ height: "1.25rem" }}>
          Password is required
        </p>
      </div>

      <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200">
        Sign Up
      </button>
    </form>
  );
};

export default CredentialsForm;
