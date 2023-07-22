import model from "../lib/model";

export default ({ form, setForm, setTrans }) => (
  <div className="container max-w-screen-sm mx-auto my-2  flex flex-wrap  justify-center items-center">
    <input
      className="flex-grow  font-semibold m-2 p-2  focus:ring-2 focus:ring-green-500  transition ease-in-out duration-500"
      value={form.date}
      type="date"
      onChange={(e) => setForm({ ...form, date: e.target.value })}
      placeholder="Date"
    />
    <input
      className="flex-grow  font-semibold m-2 p-2  focus:ring-2 focus:ring-green-500  transition ease-in-out duration-500"
      value={form.description}
      onChange={(e) => setForm({ ...form, description: e.target.value })}
      placeholder="Description"
    />
    <input
      className="flex-grow  font-semibold text-right m-2 p-2  focus:ring-2 focus:ring-green-500  transition ease-in-out duration-500"
      value={form.amount}
      type="number"
      onChange={(e) => setForm({ ...form, amount: e.target.value })}
      placeholder="Amount"
    />
    <button
      className="font-bold bg-white hover:bg-green-400 hover:text-white  m-2 px-4 py-2  transition ease-in-out duration-500"
      onClick={() => setTrans({ type: "add", payload: form })}
    >
      ✔
    </button>
    <button
      className="font-bold bg-white hover:bg-red-400 hover:text-white  m-2 px-4 py-2  transition ease-in-out duration-500"
      onClick={() => setForm({ ...model, date: "" })}
    >
      ✘
    </button>
  </div>
);
