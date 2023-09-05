
import moment, { Moment } from "moment";
import { useEffect, useRef, useState } from "react";
import { PiCurrencyKrwBold } from 'react-icons/pi';
import { Form, useLocation, useNavigate, useParams } from "react-router-dom";
import { CreateEntryProps, FormDataExpenseProps } from "../../enums/types.enum";
import { Currency } from "../../models/currency.model";
import { CustomSearchableSelect } from "../custom-searchable-select";
import { InputWithMoment } from "../input-with-moment";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";



export const AddExpenseModal = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { categorieId, travelId } : {categorieId : number , travelId: number}= location.state
  const [currency, setCurrencies] = useState<Currency[]>([]);
  const [date, setDate] = useState<Moment>(moment());
  const [globalError, setGlobalError] = useState("");
  let buttonRef = useRef<HTMLButtonElement>(null);
  let formRef = useRef<HTMLFormElement>(null);
  const { user } = useAuth0()
  const onDismiss = () => {
    navigate(-1);
  }

  const [formData, setFormData] = useState<FormDataExpenseProps>({
    title : '',
    currency: null,
    amount: 0,
    date: moment(),
  });

  const [errors, setErrors] = useState({
    title : '',
    currency: '',
    amount: '',
    date: '',
  });

  const handleDataChild = (e: any, name: string) => {
    // Update the selected date as a string
    setFormData({
      ...formData,
      [name]: e,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
    setGlobalError('')
  };

  useEffect(() => {
    if (user) {
        axios
        .get(import.meta.env.VITE_API_URL + "currency/getCurrencies")
        .then((response) => setCurrencies(response.data))
    }
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    const newErrors = {
      title : '',
      currency: '',
      amount: '',
      date: '',
    };
    // Validation logic
    if (formData.title.trim() === '') {
      newErrors.title = 'Title is required';
      
    }
    if (!formData.currency) {
      newErrors.currency = 'Currency is required';
    
    }
    if (!formData.amount) {
      newErrors.amount = 'Amount is required';
      
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
      
    }
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    if (validateForm() && formData.currency && user && user.sub  && formData.amount && 
    formData.date && formData.title.trim() !== '') {
        const postItem : CreateEntryProps = { currencyId :  formData.currency.id , date : formData.date, 
        amount: formData.amount, idAuth0: user.sub, title: formData.title, categoryId : categorieId, travelId : travelId, categorieExpenseId : categorieId }
        axios
        .post(import.meta.env.VITE_API_URL + 'entry/createEntry', postItem)
        .then((response) => console.log(response))
      }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
      <div className={` bg-[#EEEEEE] p-6 shadow-md w-[25%] resp:w-[85%] rounded-sm resp:overflow-y-scroll resp:overflow-x-hidden `}>
        <h4 className="block text-2xl font-latoBold text-center">Cat 1 expense</h4>
        <Form method="post" ref={formRef} className="flex flex-col mt-4">
          <div className="flex flex-col">
            <label>
              Currency
            </label>
            <CustomSearchableSelect selectedValue={formData.currency}
              options={currency}
              onSelect={(currency) => {
                handleDataChild(currency, 'currency')
              }}
              placeholder="Select an option"
              name="selectedOption" // Name corresponds to the field in formData
            />
          </div>
          <div className="flex flex-col">
                  <label >
                    Title
                  </label>
                  <div className="relative w-full">
                    <input
                      className="rounded-sm h-8 border-2 border-black bg-[#fffff] pl-6 w-full  "
                      placeholder=" "
                      min="0"
                      name='title'
                      type="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="text-red-200">{errors.title}</span>
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
                  name="amount"
                  min="0"
                  type="number"
                  onChange={handleChange}
                />
                <PiCurrencyKrwBold className="absolute top-2 left-1 " />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="">
              Date
            </label>
            <InputWithMoment onDateChange={(date) => {
              handleDataChild(date, 'date')
            }} />
            <span className="text-red-200">{errors.date}</span>
          </div>
          <div className="flex justify-between mt-6">
            <button
              className=" bg-slate-400  mt-2 text-white px-2 py-2 rounded-md font-sans text-xs font-bold w-32"
              ref={buttonRef}
              onClick={handleSubmit}
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