import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AdminList } from "../AdminList/admin-list";
import { AdminSkeleton } from "../admin-skeleton";




export const AdminExpense = () => {
  const [data, setData] = useState<CategoryExpense[]>();
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const { user } = useAuth0()


  useEffect(() => {
    if (user) {
      axios
        .get(import.meta.env.VITE_API_URL + "categoryExpense/getCategoryExpenses/" + user.sub)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }

  }, []);



  const handelDelete = (deleteId: number) => {
    axios
      .delete(import.meta.env.VITE_API_URL + "categoryExpense/deleteCategoryExpense/" + deleteId)
      .then((response) => setData(data!.filter((a: { id: any; }) =>
        a.id !== response.data.id
      )))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }

  if (loaded && data) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <AdminList data={data} handleDeleteFunction={handelDelete} />
        <AdminSkeleton
          setData={setData}
          data={data}
          url="categoryExpense/createCategoryExpense/"
          inputLabel="test"
          buttonLabel="Add an expense category"
        />
      </>
    );
  }
  return <span>Loading...</span>;
}




