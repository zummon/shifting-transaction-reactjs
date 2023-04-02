import React from "react";
import model from "./model";
import { arng } from "./functions";
import Form from "./Form";
import Table from "./Table";
import "./index.css";
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
				<a
					className="font-bold bg-white hover:bg-gray-900 hover:text-white  px-4 py-2  transition ease-in-out duration-500"
					href="https://zummon.page/"
					target="_blank"
					rel="noreferrer"
				>
					Made by zummon
				</a>
			</div>
		</>
	);
}
