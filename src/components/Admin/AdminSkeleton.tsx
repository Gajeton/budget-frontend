import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Form } from "react-router-dom";
import { useAxios } from "../../utils/axios-utils";
import axios from "axios";

interface AdminSkeletonProps {
    inputLabel: string,
    buttonLabel: string
    setData: any
    data:any
    url:string
}


function AdminSkeleton({...resp} :AdminSkeletonProps ) {
  const [title, setTitle] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  
  const handelPost = () => {
    if(title) {
      axios
      .post(import.meta.env.VITE_API_URL + resp.url, { title: title })
      .then((response) => resp.setData([...resp.data, response.data]))
      .finally(() => {
        setTitle("")
        setErrorInput(false)}
        );
    } else {
      setErrorInput(true)
    }
  }


  return (
    <>
      <Form className="grid justify-center grid-cols-2 gap-2 mt-6 ">
        <input type="text" className="h-10 px-2" value={title} onChange={(event) => setTitle(event.target.value)} />
        {errorInput && <span className="text-red-500">Title is mandatory</span>}
        <button className="bg-black text-white rounded-md text-lg p-2 h-10 flex justify-center " onClick={handelPost}>{resp.buttonLabel}</button>
      </Form>
    </>
  );
}
export default AdminSkeleton;


