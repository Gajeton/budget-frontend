import { ChangeEvent, useEffect, useMemo } from "react";
import { Form } from "react-router-dom";
import { useAxios } from "../../utils/axios-utils";

interface AdminSkeletonProps {
    inputLabel: string,
    buttonLabel: string
    handleAddFunction : () => void
    handleInputFunction : (event: ChangeEvent<HTMLInputElement>) => void
}


function AdminSkeleton({...resp} :AdminSkeletonProps ) {
  
    return (
      <>
        <Form  className="grid justify-center grid-cols-2 gap-2 mt-6 ">
          <input type="text" className="h-10 px-2" onChange={resp.handleInputFunction} /> 
          <button className="bg-black text-white rounded-md text-lg p-2 h-10 flex justify-center " onClick={resp.handleAddFunction}>{resp.buttonLabel}</button>
        </Form>
      </>
    );
  }
  export default AdminSkeleton;