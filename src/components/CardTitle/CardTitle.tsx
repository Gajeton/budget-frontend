import { AiOutlineArrowLeft } from "react-icons/ai";
import { useMatch, useNavigate } from "react-router-dom";

interface CardTitleProps {
  title: string;
  style?: string;
  navigateUrl : string;
}

function CardTitle({ title , style = "", navigateUrl}: CardTitleProps) {
  const navigate = useNavigate();
  const matchRoot = useMatch('/')
  const matchAddTravel = useMatch('add-travel')
  return (
    <div
      className={` my-6   w-full shadow-xl rounded-sm bg-[#4682A9] flex justify-center items-center relative font-latoBold text-3xl border`}
    >
      {(!matchRoot && !matchAddTravel) && (
        <button
          className="bg-[#F6F4EB] text-black p-2 absolute left-2  rounded-md h-8 w-8 flex items-center "
          onClick={() => navigate(navigateUrl)}
        >
          <AiOutlineArrowLeft />
        </button>
      )}

      <h1 className=" text-center p-2 justify-self-start">
        {title}
      </h1>
    </div>
  );
}

export default CardTitle;
