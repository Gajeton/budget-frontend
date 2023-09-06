import { Moment } from "moment"
import { Currency } from "../models/currency.model"


export interface AdminListProps {
    data: CategoryExpense[] | CategoryIncome[],
    handleDeleteFunction: (id: number) => void
}


export interface AdminSkeletonProps {
    inputLabel: string,
    buttonLabel: string
    setData: any
    data: any
    url: string
}

export interface FormDataExpenseProps {
  title : string,
  currency: Currency | null,
  amount : number,
  date: Moment

}

export interface CreateEntryProps {
  amount: number
  idAuth0: string
  currencyId: number
  date : Moment
  title:string
  categorieExpenseId?: number
  categorieIncomeId?: number
  travelId : number
  categoryId : number
}


export interface FormDataProps {
    destination: Destination | null,
    currency: Currency | null,
    title: string
    startDate: Moment
    endDate: Moment
    budget: number
    categoryExpense? : CategoryExpense[] 
    categoryIncome? : CategoryIncome []
  }
  
  export interface CreateTravelProps {
    destinationId: number;
    budget: number
    idAuth0: string
    currencyId: number
    categoryExpenseId : number[]
    categoryIncomeId : number[]
    startDate : Moment
    endDate: Moment
    month : number
    week : number
    day : number
  }

  export type TravelDay = {
    id: number,
    startDate : Moment,
    endDate: Moment,
    day: number
  }
