import Layout from "@/data/layout";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";

const EditorSidebar = () => {
	return (
		<aside className="p-4">
			<div>
				<h1 className="text-xl font-bold mb-2">Layouts</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{Layout.map((layout, index) => (
					<ElementLayoutCard layout={layout} key={index} />
				))}
			</div>
		</aside>
	);
};

export default EditorSidebar;
