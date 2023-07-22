import { sum } from "./functions";

export default ({ setForm, trans, setTrans }) => (
	<table className="container max-w-screen-sm mx-auto my-2">
		<thead className="text-gray-100 bg-green-500  border-b-4 border-green-100  shadow-md">
			<tr className="">
				<th className="text-left p-2">Date</th>
				<th className="text-left p-2">Description</th>
				<th className="text-right p-2">Amount</th>
			</tr>
		</thead>
		<tbody className="font-semibold text-green-800 bg-white  shadow-md">
			{trans.map((item, index) => (
				<tr
					className="cursor-pointer hover:bg-green-100  transition ease-in-out duration-500"
					key={index}
					onClick={() => {
						setForm(item);
						setTrans({ type: "send", payload: index });
					}}
				>
					<td className="text-left p-2">{item.date}</td>
					<td className="text-left p-2">{item.description}</td>
					<td className="text-right p-2">{item.amount}</td>
				</tr>
			))}
		</tbody>
		<tfoot className="text-green-800 bg-green-100  shadow-md">
			<tr className="">
				<th className="text-left px-2"></th>
				<th className="text-left px-2"></th>
				<th className="text-right px-2">{sum(trans, "amount")}</th>
			</tr>
		</tfoot>
	</table>
);
