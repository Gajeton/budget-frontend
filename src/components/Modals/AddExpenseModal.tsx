
import { useRef, useState } from "react";
import { PiCurrencyKrwBold, PiCurrencyKrwLight } from 'react-icons/pi'
import { Form, useNavigate } from "react-router-dom";

interface ModalProps {
  closeModal: () => void;
  label: string,
  style: string
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const AddExpenseModal = () => {
  const navigate = useNavigate();


  let buttonRef = useRef<HTMLButtonElement>(null);
  let formRef = useRef<HTMLFormElement>(null);
  function onDismiss() {
    navigate(-1);
    
  }

  return (
    <div
      onClick={onDismiss}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center "
    >
      <div
        className={` bg-[#EEEEEE] p-6 shadow-md w-[25%] resp:w-[85%] rounded-sm resp:overflow-y-scroll resp:overflow-x-hidden `}
      >
        <h4 className="block text-2xl font-latoBold text-center">Cat 1 expense</h4>

        <Form method="post" ref={formRef} className="flex flex-col mt-4">
        <div className="flex flex-col">
              <label>
                Currency
              </label>
              <select className="rounded-sm h-8 border-2 border-black bg-[#fffff] " >
                <option value="EUR">Euro</option>
                <option value="DEM">German Mark</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="KRW">South Korean Won</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="CHF">Swiss Franc</option>
                <option value="USD">US Dollar</option>
              </select>


          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label >
                Amount
              </label>
              <div className="relative w-full">
                <input
                  className="rounded-sm h-8 border-2 border-black bg-[#fffff] pl-6 w-full  "
                  placeholder=" "
                  min="0"
                  type="number"
                />
                <PiCurrencyKrwBold className="absolute top-2 left-1 " />
              </div>

            </div>
          </div>


          <div className="flex flex-col">
            <label className="">
              Date
            </label>
            <input className="z-10 rounded-sm h-8 border-2 border-black bg-[#fffff] " type="date" id="start" name="trip-start" min="2018-01-01" />
          </div>


          <div className="flex justify-between mt-6">
            <button
              className=" bg-slate-400  mt-2 text-white px-2 py-2 rounded-md font-sans text-xs font-bold w-32"
              ref={buttonRef}
              onClick={onDismiss}
            >
              Validate
            </button>
            <button
              className=" bg-black mt-2 text-white px-2 py-2 rounded-md font-sans text-xs font-bold w-32"
              onClick={onDismiss}
              ref={buttonRef}
            >
              Close Modal
            </button>
          </div>

        </Form>

      </div>
    </div>
  );
};

export default AddExpenseModal;