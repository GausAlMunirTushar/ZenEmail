"use client";
import { useUserDetailContext } from "@/app/ConvexClientProvider";
import EmailTemplateList from "@/components/dashboard/EmailTemplateList";
import Navbar from "@/components/layouts/Navbar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const DashboardPage = () => {
	const { userDetail, setUserDetail } = useUserDetailContext();
	return (
		<div className="container mx-auto">
			<Navbar />
			<div className="flex justify-between items-center mt-16 md:px-20">
				<h2 className="font-bold text-3xl">
					Hello, {userDetail?.name}
				</h2>
				<Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-500">
					<Plus size={24} className="mr-2" />
					Create New Template
				</Button>
			</div>
			<div>
				<EmailTemplateList />
			</div>
		</div>
	);
};

export default DashboardPage;
