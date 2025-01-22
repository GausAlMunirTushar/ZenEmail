"use client";
import Image from "next/image";
import { useUserDetailContext } from "@/app/ConvexClientProvider";
import GoogleSignButton from "../custom/GoogleSignButton";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
	const { userDetail, setUserDetail } = useUserDetailContext();

	return (
		<div className="container mx-auto flex justify-between items-center px-4 md:px-10 py-2 shadow-sm border border-gray-200 rounded-md my-1 top-0 sticky bg-white">
			<div className="flex items-center gap-4">
				<Image
					src="/images/zenemail-logo.svg"
					alt="logo"
					width={128}
					height={30}
					className="w-12 h-12"
				/>
				<h1 className="text-2xl">
					ZenEmail <sup className="text-orange-500">AI</sup>
				</h1>
			</div>
			<div>
				{userDetail?.email ? (
					<div className="flex gap-3 items-center">
						<Link href="/dashboard">
							<Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-500">
								Dashboard
							</Button>
						</Link>
						{userDetail?.picture && (
							<Image
								src={userDetail.picture}
								alt="profile"
								width={40}
								height={40}
								className="rounded-full"
							/>
						)}
					</div>
				) : (
					<GoogleSignButton />
				)}
			</div>
		</div>
	);
};

export default Navbar;
