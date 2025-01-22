import { defineSchema } from "convex/server";

export default defineSchema({
	users: defineSchema({
		name: v.string(),
		email: v.string(),
		picture: v.string(),
		credits: v.number(),
	}),
});
