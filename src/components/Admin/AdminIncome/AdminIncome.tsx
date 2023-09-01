import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import AdminSkeleton from "../../../components/Admin/AdminSkeleton";
import AdminList from "../AdminList/AdminList";
import { useAuth0 } from "@auth0/auth0-react";

function AdminIncome() {
  const [data, setData] = useState<any>(null);;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const { user } = useAuth0()

  useEffect(() => {
    if (user) {
    axios
      .get(import.meta.env.VITE_API_URL + "categoryIncome/getCategoryIncomes/" + user.sub)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
    }
  }, []);



  const handelDelete = (deleteId: number) => {
    axios
      .delete(import.meta.env.VITE_API_URL + "categoryIncome/deleteCategoryIncome/" + deleteId)
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
          setData={setData}
          data={data}
          url="categoryIncome/createCategoryIncome/"
          inputLabel="test"
          buttonLabel="Add an income category"
        />
      </>


    );
  }
  return <span>Loading...</span>;


}
export default AdminIncome;








