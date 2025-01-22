import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Plus } from "lucide-react";

const EmailTemplateList = () => {
	const [emailTemplates, setEmailTemplates] = useState([]);
	return (
		<div className="container mx-auto">
			<div className="my-6 md:px-20">
				<h2 className="font-bold">Workspace</h2>
			</div>
			<div className="flex justify-center items-center mt-16 md:px-20">
				{emailTemplates?.length == 0 && (
					<div>
						<Image
							src="/images/dashboard/empty-poster.svg"
							alt="empty"
							width={500}
							height={500}
						/>

						<p className="text-center">
							You have not created any email templates yet.
						</p>
						<div className="mt-4 flex justify-center">
							<Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-500">
								<Plus /> Create New
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default EmailTemplateList;
