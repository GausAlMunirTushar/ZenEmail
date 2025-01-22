import Layout from "@/data/layout";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";
import ElementList from "@/data/elementList";

const EditorSidebar = () => {
	return (
		<aside className="p-4 h-screen overflow-y-auto  scrollbar-none">
			<section>
				<div>
					<h1 className="text-xl font-bold mb-2">Layouts</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{Layout.map((layout, index) => (
						<ElementLayoutCard layout={layout} key={index} />
					))}
				</div>
			</section>
			<section>
				<div>
					<h1 className="text-xl font-bold mt-8 mb-2">Elements</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{ElementList.map((element, index) => (
						<ElementLayoutCard layout={element} key={index} />
					))}
				</div>
			</section>
		</aside>
	);
};

export default EditorSidebar;
