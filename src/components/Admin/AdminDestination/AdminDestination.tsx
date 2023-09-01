import { useEffect, useState } from "react";
import AdminSkeleton from "../AdminSkeleton";
import axios from "axios";
import AdminList from "../AdminList/AdminList";
import { useAuth0 } from "@auth0/auth0-react";


function AdminDestination() {
  const [data, setData] = useState<any>(null);;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const { user } = useAuth0()

  useEffect(() => {

    if (user) {
      axios.get(import.meta.env.VITE_API_URL + "destination/getDestinations/" + user.sub)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);



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
          setData={setData}
          data={data}
          url="destination/createDestination/"
          inputLabel="test"
          buttonLabel="Add a destination"
        />
      </>
    );
  }
  return <span>Loading...</span>;


}
export default AdminDestination;




