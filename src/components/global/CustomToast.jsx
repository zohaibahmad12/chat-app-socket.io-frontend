import { useEffect, useState } from "react";

const CustomToast = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-xs w-full p-2 bg-red-600 text-white rounded-md shadow-md transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-40px]"
      }`}
      style={{ transition: "opacity 0.5s ease, transform 0.5s ease", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <span className="text-center">{message}</span>
    </div>
  );
};

export default CustomToast;
