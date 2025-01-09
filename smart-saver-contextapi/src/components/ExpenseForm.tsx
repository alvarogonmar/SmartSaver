import { useState } from "react";
import type { DraftExpense } from "../types";
import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
  });

  return (
    <form className="space-y-5">
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
        New Expense
      </legend>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl font-bold ">
          New Expense:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Enter your new expense"
          className="bg=slate-100 p-2"
          name="expenseName"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl font-bold ">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Enter the amount"
          className="bg=slate-100 p-2"
          name="amount"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl font-bold ">
          Category:
        </label>
        <select id="category" className="bg=slate-100 p-2" name="category">
          <option value=""> -- Choose -- </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl font-bold ">
          Date:
        </label>
        <DatePicker className="bg-slate-100 p-2 border-0" />
      </div>

      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={"Submit Expense"}
      />
    </form>
  );
}
