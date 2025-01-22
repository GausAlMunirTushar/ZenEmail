import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
	return (
		<section className="container mx-auto py-12 px-4 md:px-20 xl:px-64">
			<h1 className="font-extrabold text-5xl text-center">
				AI Powered{" "}
				<span className="text-blue-500">Email Templates</span>
			</h1>
			<p className="text-center my-4 font-light text-gray-600">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
				voluptates porro, possimus ex assumenda accusamus necessitatibus
				dignissimos quod a saepe quisquam enim eveniet ipsam vel itaque
				velit maiores minus ratione?
			</p>
			<div className="flex justify-center space-x-4">
				<Button variant="outline"> Try Demo</Button>
				<Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-500">
					{" "}
					Get Started
				</Button>
			</div>
			<div className="flex justify-center my-6">
				<Image
					src="/images/hero.svg"
					alt="hero"
					width={800}
					height={800}
				/>
			</div>
		</section>
	);
};

export default Hero;
