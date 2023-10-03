import { AiOutlineDelete } from "react-icons/ai";
import { AdminListProps } from "../../../enums/types.enum";

export const AdminList = ({ data, handleDeleteFunction }: AdminListProps) => {
  const formatDataList = (list: CategoryExpense[] | CategoryIncome[]) => {
    return (list.map(res => { return <div className="flex justify-between items-center">
     <span className=" bg-[#F6F4EB] border border-gray-300 p-4 grow">{res.title}</span>
     <button className="bg-[#91C8E4] p-1 text-white rounded-sm mx-2" onClick={() => handleDeleteFunction(res.id)}><AiOutlineDelete className="h-4 w-4" /></button>
   </div> }))
  }
  return (
    <>
      <div className="bg-[#91C8E4] rounded-sm hover:bg-[#91C8E4] grid grid-cols-3 w-full">
        {formatDataList(data)}
      </div>
    </>
  );
}