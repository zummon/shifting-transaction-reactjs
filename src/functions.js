export const now = () => {
	// https://stackoverflow.com/questions/23593052/
	let d = new Date();
	let month = "" + (d.getMonth() + 1);
	let day = "" + d.getDate();
	let year = d.getFullYear();

	if (month.length < 2) {
		month = "0" + month;
	}
	if (day.length < 2) {
		day = "0" + day;
	}

	return [year, month, day].join("-");
};
export const arng = (arr, key) => {
	// https://stackoverflow.com/questions/8837454/
	return arr.sort((a, b) => {
		if (a[key] < b[key]) return -1;
		if (a[key] > b[key]) return 1;
		return 0;
	});
};
export const sum = (arr, key) => {
	// https://stackoverflow.com/questions/23247859/
	return arr.reduce(
		(n, obj) => n + (isNaN(obj[key]) ? 0 : Number(obj[key])),
		0
	);
};
