import { Moment } from "moment";



export interface BudgetDetailExpenseItemData {
    categoryExpenseId: number,
    travelId: number,
    categoryTitle: string,
    entrysAmount: number
}

export type EntryWithCategoryExpenseIncome = {
    id: number,
    categoryExpense: CategoryExpense,
    categoryIncome: CategoryIncome,
    ammount: number
}

export interface BudgetDetailIncomeItemData {
    totalExpense: number;
    totalEstimated: number;
    balance: number;
}

export type TravelMonthType = {
    id: number,
    startDate: Moment,
    endDate: Moment,
    month: number
}

export type TravelWeekType = {
    id: number,
    startDate: Moment,
    endDate: Moment,
    week: number
}

export type TravelDayType = {
    id: number,
    startDate: Moment,
    endDate: Moment,
    day: number
}

export type CategoryIncomeByTravelIdType = {
    categoryIncomeId: number,
    id: number,
    travelId: number,
    categoryTitle: string
    entrysAmount: number,
    countEntrys: number
}

export type CategoryExpenseByTravelIdType = {
    categoryExpenseId: number,
    id: number,
    travelId: number,
    categoryTitle: string
    entrysAmount: number,
    countEntrys: number
}

export type GetTravelByIdType = {
    id: number,
    startDate: Moment,
    endDate: Moment,
    totalBudget: number,
    budget: number,
    day: number
}

export type GetTravelDetailByIdType = {
    id: number,
    startDate: Moment,
    endDate: Moment,
    nbIncome: string,
    nbExpense: string,
    totalIncome: string
    totalExpense: string
}

export type GetTravelsType = {
    id: number,
    startDate: Moment,
    endDate: Moment,
    totalIncome: string,
    totalExpense: string,
    destination: string
}

