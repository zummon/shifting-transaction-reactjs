import { useReducer, useState } from "react";
import model from "./lib/model";
import { arng } from "./lib/functions";
import Form from "./component/Form";
import Table from "./component/Table";

export default function App() {
  const [trans, setTrans] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "add": {
          let data = [...state, action.payload];
          return arng(data, "date");
        }
        case "send": {
          let data = state.slice();
          data.splice(action.payload, 1);
          return data;
        }
        default:
          return state;
      }
    },
    [model]
  );

  const [form, setForm] = useState(model);

  return (
    <>
      <Form form={form} setForm={setForm} setTrans={setTrans} />
      <Table setForm={setForm} trans={trans} setTrans={setTrans} />
      <div className="text-center my-8">
        <span className="bg-white px-4 py-2">
          Made by zummon (Teerapat Anantarattanachai)
        </span>
      </div>
    </>
  );
}
