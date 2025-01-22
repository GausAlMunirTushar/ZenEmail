import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center px-4 py-4 shadow-md">
			<Image
				src="/images/zenemail-logo.svg"
				alt="logo"
				width={128}
				height={128}
			/>
			<div>
				<Button> Get Started</Button>
			</div>
		</div>
	);
};

export default Navbar;
