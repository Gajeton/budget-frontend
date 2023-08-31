import { Form } from "react-router-dom";

interface AdminListProps {
  data: CategorieExpense[] | CategorieIncome[],
  handleDeleteFunction: (id: number) => void
}



function AdminList({ data, handleDeleteFunction }: AdminListProps) {

  const formatDataList = (list: CategorieExpense[] | CategorieIncome[]) => {
    return (list.map(res => { return <><p className=" bg-[#F6F4EB] border border-gray-300 p-4 w-full">{res.test}</p>
    <button onClick={() => handleDeleteFunction(res.id)}>Delete</button></> }))
  }


  return (
    <>
      <div className="bg-[#91C8E4] rounded-sm hover:bg-[#91C8E4] grid grid-cols-3 w-full">
        {formatDataList(data)}

      </div>
    </>
  );
}
export default AdminList;