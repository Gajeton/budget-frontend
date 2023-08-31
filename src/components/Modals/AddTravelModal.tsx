
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


const AddTravelModal = () => {
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
        className={` bg-[#EEEEEE] p-6 shadow-md w-[80%] resp:w-[85%] rounded-sm resp:overflow-y-scroll resp:overflow-x-hidden `}
      >
        <h4 className="block text-2xl ">Add travel</h4>

        <Form method="post" ref={formRef} className="flex flex-col">
          <div className="grid grid-cols-2 gap-2 w-full">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <label>
                  Destination
                </label>
                <input
                  className="rounded-sm h-8 border-2 border-black bg-[#fffff] p-2"
                  placeholder=" "
                />
              </div>
              <div className="flex flex-col">
                <label >
                  Pre-departure budget
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
          </div>

          <div className="grid grid-cols-2 gap-2 w-full ">
            <div className="flex flex-col">
              <label className="">
                Started date
              </label>
              <input className="z-10 rounded-sm h-8 border-2 border-black bg-[#fffff] " type="date" id="start" name="trip-start" min="2018-01-01" />
            </div>
            <div className="flex flex-col">
              <label className="">
                End date
              </label>
              <input type="date" className="z-10 rounded-sm h-8 border-2 border-black bg-[#fffff] " id="start" name="trip-start" min="2018-01-01" />
            </div>
          </div>

          <button
            className=" bg-slate-400  mt-2 text-white px-2 py-2 rounded-md font-sans text-xs font-bold w-32"
            onClick={onDismiss}
          >
            Validate
          </button>
          <button
            className=" bg-black mt-2 text-white px-2 py-2 rounded-md font-sans text-xs font-bold w-32 mr-2"
            onClick={onDismiss}
          >
            Close Modal
          </button>
        </Form>

      </div>
    </div>
  );
};

export default AddTravelModal;