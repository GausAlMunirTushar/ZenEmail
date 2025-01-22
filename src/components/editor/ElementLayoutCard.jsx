import React from "react";

const ElementLayoutCard = ({ layout }) => {
	return (
		<div className="flex flex-col items-center  cursor-pointer border border-gray-400 border-dashed p-4 rounded-lg group hover:bg-gray-100 hover:border-blue-500  transition-colors duration-500">
			<layout.icon
				size={24}
				className="bg-gray-200 w-10 h-10 p-2 rounded-full groupd-hover:bg-blue-500 group-hover:bg-blue-100 transition-colors duration-500"
			/>
			<h2>{layout.label}</h2>
		</div>
	);
};

export default ElementLayoutCard;
