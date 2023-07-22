import React from "react";
import model from "./lib/model";
import { arng } from "./lib/functions";
import Form from "./component/Form";
import Table from "./component/Table";
// styles

export default function App() {
  const [trans, setTrans] = React.useReducer(
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

  const [form, setForm] = React.useState(model);

  const formProps = { form, setForm, setTrans };
  const tableProps = { setForm, trans, setTrans };

  return (
    <>
      <Form {...formProps} />
      <Table {...tableProps} />
      <div className="text-center my-8">
        <span className="bg-white px-4 py-2">
          Made by zummon (Teerapat Anantarattanachai)
        </span>
      </div>
    </>
  );
}
