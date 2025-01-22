import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<div className="container mx-auto flex justify-between items-center px-4 md:px-10 py-2 shadow-sm border border-gray-200 rounded-md my-1 top-0 stciky bg-white">
			<div className="flex items-center gap-4">
				<Image
					src="/images/zenemail-logo.svg"
					alt="logo"
					width={128}
					height={30}
					className="w-12 h-12"
				/>
				<h1 className="text-2xl">ZenEmail <sup className="text-orange-500">AI</sup></h1>
			</div>
			<div>
				<Button className="bg-blue-500 text-white  hover:bg-blue-600 transition-colors duration-500">
					{" "}
					Get Started
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
