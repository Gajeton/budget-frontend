
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { EventHandler, useEffect, useRef, useState } from "react";
import { PiCurrencyKrwBold, PiCurrencyKrwLight } from 'react-icons/pi'
import { Form, useNavigate } from "react-router-dom";
import CustomSearchableSelect from "../CustomSearchableSelect";
import { Currency, CurrencyInfo, currencyInfo } from "../../enums/currency.enum";
import CustomSearchableSelectEnum from "../SearchableCurrencySelect";
import SearchableCurrencySelect from "../SearchableCurrencySelect";
import moment, { Moment } from "moment";
import InputWithMoment from "../InputWithMoment";

interface ModalProps {
  closeModal: () => void;
  label: string,
  style: string
}

const initTravel = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [exchangeRate, setExchangeRate] = useState<any>();
  const { user } = useAuth0()
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);
  const currency = currencyInfo
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  return {
    destinations, setDestinations, error, setError, loaded, setLoaded, symbol, setSymbol, exchangeRate, setExchangeRate, user: { user },
    selectedCurrency, setSelectedCurrency, currency, navigate, formRef, disabled , setDisabled
  }
}

interface FormDataProps {
  destination: Destination | null,
  currency: Currency | null,
  title: string
  startDate: Moment
  endDate: Moment
  ammount: number
}

export interface CreateTravelProps {
  destinationId: number;
  idAuth0: string
  currencyId: string
  startDate : Moment
  endDate: Moment
  month : number
  week : number
  day : number
}


const AddTravelModal = () => {

  const {
    destinations, setDestinations, error, setError, loaded, setLoaded, symbol, setSymbol, exchangeRate, setExchangeRate, user: { user },
    selectedCurrency, setSelectedCurrency, currency, navigate, formRef, disabled , setDisabled} = initTravel();

  const onDismiss = () => {
    navigate(-1);
  }

  const [formData, setFormData] = useState<FormDataProps>({
    destination: null,
    currency: null,
    title: '',
    startDate: moment(),
    endDate: moment(),
    ammount: 0
  });

  const [errors, setErrors] = useState({
    destination: '',
    currency: '',
    title: '',
    startDate: '',
    endDate: '',
    ammount: ''
  });

  const [globalError, setGlobalError] = useState("");


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
  

  const validateForm = () => {
    const newErrors = {
      destination: '',
      currency: '',
      title: '',
      startDate: '',
      endDate: '',
      ammount: ''
    };
    // Validation logic
    if (formData.title.trim() === '') {
      newErrors.title = 'Title is required';
    }
    if (!formData.destination) {
      newErrors.destination = 'Destination is required';
    }
    if (!formData.currency) {
      newErrors.currency = 'Main currency is required';
    }
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    }
    if (!formData.endDate) {
      newErrors.endDate = 'End date is required';
    }
    if (!formData.ammount) {
      newErrors.ammount = 'Ammount is required';
    }
    if (formData.startDate && formData.endDate) {
      if (formData.endDate < formData.startDate) {
        setGlobalError('End date must be after start date')
      }
      if (formData.startDate > formData.endDate) {
        setGlobalError('Start date must be before end date')
      }
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };


  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (validateForm() && globalError === "" && formData.destination && user && user.sub && formData.currency) {
      // Use the parsed values as needed
      if(formData.endDate && formData.startDate) {
        const numberOfMonths = formData.endDate.diff(formData.startDate, 'months');
        const numberOfWeek = formData.endDate.diff(formData.startDate, 'weeks');
        const numberOfday = formData.endDate.diff(formData.startDate, 'days');
        console.log(formData.currency)
        const postItem : CreateTravelProps = { month :  numberOfMonths , day : numberOfday, 
        week: numberOfWeek, destinationId: formData.destination.id , startDate : formData.startDate, endDate: formData.endDate,
        idAuth0 : user.sub, currencyId: formData.currency}
        axios
        .post(import.meta.env.VITE_API_URL + 'travel/createTravel', 
          postItem)
        .then((response) => console.log(response))
      }
     
    }
  };


  useEffect(() => {
    if (user) {
      axios
        .get(import.meta.env.VITE_API_URL + "destination/getDestinations/" + user.sub)
        .then((response) => setDestinations(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);

  useEffect(() => {
    if (selectedCurrency) {
      axios
        .get("https://api.exchangerate.host/latest", { params: { base: selectedCurrency.toString() } })
        .then((response) => setExchangeRate(response))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, [selectedCurrency]);

  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center "
      >
        <div
          className={` bg-[#EEEEEE] p-6 shadow-md w-[80%] resp:w-[85%] rounded-sm resp:overflow-y-scroll resp:overflow-x-hidden `}
        >
          <h4 className="block text-2xl ">Add travel</h4>

          <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col">
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <label>
                    Destinations
                  </label>
                  <CustomSearchableSelect
                    selectedValue={formData.destination}
                    options={destinations}
                    onSelect={(destination) => {
                      handleDataChild(destination, 'destination')
                    }}
                    placeholder="Select an option"
                    name="selectedOption" // Name corresponds to the field in formData
                  />
                </div>
                <div className="flex flex-col">
                  <label >
                    Pre-departure budget
                  </label>
                  <div className="relative w-full">
                    <input
                      className={`rounded-sm h-8 border-2 border-black bg-[#fffff] pl-6 w-full disabled:opacity-25  }`}
                      placeholder=" "
                      min="0"
                      name='ammount'
                      type="number"
                      value={formData.ammount}
                      onChange={handleChange}
                      disabled={disabled}
                    />
                    <span className="absolute top-1 left-1 ">{symbol}</span>
                  </div>
                  <span className="text-red-200">{errors.ammount}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <label>
                  Travel main currency
                </label>
                <SearchableCurrencySelect
                  selectedValue={formData.currency}
                  options={Object.keys(currency).map((key) => ({
                    value: key,
                    label: `${currency[key].label} (${currency[key].symbol})`,
                    symbol: `${currency[key].symbol}`,
                    id: `${currency[key].id}`
                  }))}
                  onSelect={(currency) => {
                    setDisabled(false)
                    setSymbol(currency.symbol)
                    console.log(currency)
                    handleDataChild(currency.id, 'currency')
                  }}
                  placeholder="Select currency"
                  name="selectedCurrency" // Name corresponds to the field in formData
                />
                <span className="text-red-200">{errors.currency}</span>
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
            </div>
            <div className="grid grid-cols-2 gap-2 w-full ">
              <div className="flex flex-col">
                <label className="">
                  Started date
                </label>
                <InputWithMoment onDateChange={(startDate) => {
                    handleDataChild(startDate, 'startDate')
                  }} />
                <span className="text-red-200">{errors.startDate}</span>
              </div>
              <div className="flex flex-col">
                <label className="">
                  End date
                </label>
                <InputWithMoment onDateChange={(endDate) => {
                    handleDataChild(endDate, 'endDate')
                  }} />
                <span className="text-red-200">{errors.endDate}</span>
              </div>
            </div>
            <button
              className=" bg-slate-400  mt-2 text-white px-2 py-2 rounded-md font-sans text-xs font-bold w-32"
              type="submit"
            >
              Validate
            </button>
            <button
              className=" bg-black mt-2 text-white px-2 py-2 rounded-md font-sans text-xs font-bold w-32 mr-2"
              onClick={onDismiss}
            >
              Close Modal
            </button>
            <div className="text-red-400">{globalError}</div>
          </form>
        </div>
      </div>
    );
  }
  return <span>Loading...</span>;
};

export default AddTravelModal;