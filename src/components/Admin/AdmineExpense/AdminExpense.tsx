import AdminSkeleton from "../../../components/Admin/AdminSkeleton";
import AdminList from "../AdminList/AdminList";

import { useAxios } from "../../../utils/axios-utils";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import axios from "axios";




function AdminExpense() {
  const [data, setData] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "categorieExpense/getCategorieExpenses/" + 1)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  const handelPost = () => {
    axios
      .post(import.meta.env.VITE_API_URL + "categorieExpense/createCategorieExpense/", { title: title })
      .then((response) => setData([...data, response.data]))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }

  const handelDelete = (deleteId: number) => {
    axios
      .delete(import.meta.env.VITE_API_URL + "categorieExpense/deleteCategorieExpense/" + deleteId)
      .then((response) => setData(data.filter((a: { id: any; }) =>
        a.id !== response.data.id
      )))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }



  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <AdminList data={data} handleDeleteFunction={handelDelete} />
        <AdminSkeleton
          handleAddFunction={handelPost}
          handleInputFunction={handleInputChange}
          inputLabel="test"
          buttonLabel="Add an expense category"
        />
      </>
    );
  }
  return <span>Loading...</span>;



}
export default AdminExpense;





