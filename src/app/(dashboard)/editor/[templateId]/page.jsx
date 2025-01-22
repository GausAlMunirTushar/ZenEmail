import Canvas from "@/components/editor/Canvas";
import EditorHeader from "@/components/editor/EditorHeader";
import EditorSidebar from "@/components/editor/EditorSidebar";
import Settings from "@/components/editor/Settings";
import React from "react";

const EditorPage = () => {
	return (
		<main>
			<EditorHeader />
			<section className="grid grid-cols-5">
				<div>
					<EditorSidebar />
				</div>
				<div className="col-span-3 bg-gray-100">
					<Canvas />
				</div>
				<div>
					<Settings />
				</div>
			</section>
		</main>
	);
};

export default EditorPage;
