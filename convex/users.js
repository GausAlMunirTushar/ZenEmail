import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateUser = mutation({
	args: {
		name: v.string(),
		email: v.string(),
		picture: v.string(),
	},
	handler: async (ctx, args) => {
		// Check if the user already exists
		const user = await ctx.db
			.query("users")
			.filter((q) => q.eq(q.field("email"), args.email))
			.collect();

		// Create a new user if none exists
		if (user.length === 0) {
			const result = await ctx.db.insert("users", {
				name: args.name,
				email: args.email,
				picture: args.picture,
				credits: 3,
			});
			return result;
		}

		// Return the existing user
		return user[0];
	},
});
