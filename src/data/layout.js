import {
	Columns2,
	Columns3,
	Columns4,
	RectangleHorizontal,
} from "lucide-react";

const Layout = [
	{
		label: "Column",
		type: "column",
		numOfColumn: 1,
		icon: RectangleHorizontal,
	},
	{
		label: "Column 2",
		type: "column-2",
		numOfColumn: 2,
		icon: Columns2,
	},
	{
		label: "Column 3",
		type: "column-3",
		numOfColumn: 3,
		icon: Columns3,
	},
	{
		label: "Column 4",
		type: "column-4",
		numOfColumn: 4,
		icon: Columns4,
	},
];

export default Layout;
