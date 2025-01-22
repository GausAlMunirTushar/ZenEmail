import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CodeSquare, Monitor, Smartphone } from "lucide-react";

const EditorHeader = () => {
	return (
		<div className="px-4 shadow-sm flex items-center justify-between py-2">
			<Image
				src="/images/zenemail-logo.svg"
				alt="header"
				width={30}
				height={30}
			/>
			<div>
				<Button variant="ghost">
					<Monitor />
					Desktop
				</Button>
				<Button variant="ghost">
					{" "}
					<Smartphone />
					Mobile
				</Button>
			</div>
			<div className="flex gap-3">
				<Button variant="ghost">
					<CodeSquare size={24} className="mr-2" />
				</Button>
				<Button variant="outline">Send Test Email</Button>
				<Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-500">
					Save Template
				</Button>
			</div>
		</div>
	);
};

export default EditorHeader;
