import { useEffect, useState } from "react";
import AdminSkeleton from "../../../components/Admin/AdminSkeleton";
import { useAxios } from "../../../utils/axios-utils";
import AdminList from "../AdminList/AdminList";
import axios from "axios";

function AdminIncome() {
  const [data, setData] = useState<any>(null);;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "categorieIncome/getCategorieIncomes/" + 1)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  const handelPost = () => {
    axios
      .post(import.meta.env.VITE_API_URL + "categorieIncome/deleteCategorieIncome/", { test: 'fwefwefewf' })
      .then((response) => setData([...data, response.data]))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }

  const handelDelete = (deleteId: number) => {
    axios
      .delete(import.meta.env.VITE_API_URL + "categorieIncome/deleteCategorieIncome/" + deleteId)
      .then((response) => setData(data.filter((a: { id: any; }) =>
        a.id !== response.data.id
      )))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }



  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <AdminList data={data} handleDeleteFunction={handelDelete} />
        <AdminSkeleton
          handleAddFunction={handelPost}
          inputLabel="test"
          buttonLabel="Add an income category"
        />
      </>


    );
  }
  return <span>Loading...</span>;


}
export default AdminIncome;








