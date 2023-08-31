import { useEffect, useState } from "react";
import AdminSkeleton from "../AdminSkeleton";
import axios from "axios";
import AdminList from "../AdminList/AdminList";


function AdminDestination() {
  const [data, setData] = useState<any>(null);;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "destination/getDestinations/" + 1)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  const handelPost = () => {
    axios
      .post(import.meta.env.VITE_API_URL + "destination/createDestination/", { test: 'fwefwefewf' })
      .then((response) => setData([...data, response.data]))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }

  const handelDelete = (deleteId: number) => {
    axios
      .delete(import.meta.env.VITE_API_URL + "destination/deleteDestination/" + deleteId)
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
          buttonLabel="Add an destination"
        />
      </>
    );
  }
  return <span>Loading...</span>;

 
}
export default AdminDestination;




