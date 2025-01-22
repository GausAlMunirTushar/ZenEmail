"use client";
import { UserDetailContext } from "@/contexts/UserDetailContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useEffect, useState } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function ConvexClientProvider({ children }) {
	const [userDetail, setUserDetail] = useState();
	useEffect(() => {
		if (typeof window !== "undefined") {
			const storage = JSON.parse(localStorage.getItem("userInfo"));
			if (storage?.email || storage) {
				// Redirect to home page
			} else {
				setUserDetail(storage);
			}
		}
	}, []);
	return (
		<ConvexProvider client={convex}>
			<GoogleOAuthProvider
				clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
			>
				<UserDetailContext.Provider
					value={{ userDetail, setUserDetail }}
				>
					<div>{children}</div>
				</UserDetailContext.Provider>
			</GoogleOAuthProvider>
			;
		</ConvexProvider>
	);
}

export const UserDetailContext = () => {
	return useContext(UserDetailContext);
};
