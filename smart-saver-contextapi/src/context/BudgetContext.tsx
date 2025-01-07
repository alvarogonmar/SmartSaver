import { useReducer } from "react"
import { budgetReducer, initialState } from "../reducers/budget-reducer"

export const BudgetProvider = () => { // Provider: es de donde vienen los datos

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (

    )

}