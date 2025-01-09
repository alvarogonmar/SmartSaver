import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseList() {
  const { state } = useBudget();

  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);

  return (
    <div className="mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">No Expenses yet</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Expense List</p>
        </>
      )}
    </div>
  );
}
