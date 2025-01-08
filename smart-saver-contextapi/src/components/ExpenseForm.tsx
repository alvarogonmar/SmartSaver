export default function ExpenseForm() {
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
    </form>
  );
}
