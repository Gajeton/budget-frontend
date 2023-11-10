import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { AdminList } from "../AdminList/admin-list";
import { AdminSkeleton } from "../admin-skeleton";


export const AdminDestination = () => {
  const [data, setData] = useState<Destination[]>([]);;
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const { user } = useAuth0()

  useEffect(() => {

    if (user) {
      axios.get(import.meta.env.VITE_API_URL + "users/destinations/" + user.sub)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);


  const handelDelete = (deleteId: number) => {
    axios
      .delete(import.meta.env.VITE_API_URL + "destinations/delete_destination/" + deleteId)
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
          url="destinations/create_destination/"
          inputLabel="test"
          buttonLabel="Add a destination"
        />
      </>
    );
  }
  return <span>Loading...</span>;


}



