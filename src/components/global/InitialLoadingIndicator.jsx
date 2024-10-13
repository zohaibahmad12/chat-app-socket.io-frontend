import { ThreeDots } from "react-loader-spinner";
const InitialLoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ThreeDots height="80" width="80" radius="9" color="#1F2937" ariaLabel="three-dots-loading" visible={true} />
    </div>
  );
};

export default InitialLoadingIndicator;
