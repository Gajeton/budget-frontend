import { BiLoaderAlt } from "react-icons/bi";

export const PageLoader = () => {
  return (
    <div className="loader h-screen flex justify-center items-center">
      <BiLoaderAlt alt="Loading..." className="animate-spin h-16 w-16" />
    </div>
  );
};