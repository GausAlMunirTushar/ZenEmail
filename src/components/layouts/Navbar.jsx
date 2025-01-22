import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<div className="container flex justify-between items-center px-4 py-2 shadow-sm">
			<Image
				src="/images/zenemail-logo.svg"
				alt="logo"
				width={128}
				height={30}
				className="w-96 h-12"
			/>
			<div>
				<Button> Get Started</Button>
			</div>
		</div>
	);
};

export default Navbar;
