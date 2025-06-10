import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  registeration: defineTable({
    clerkId: v.string(),
    email: v.string(),
    role: v.string(),
  }),
//   flats: defineTable({
//   flatNumber: v.string(),
//   flatSize: v.string(), // or number, e.g. in sqft
//   floor: v.optional(v.number()),
//   status: v.union(v.literal("occupied"), v.literal("vacant")),
//   residentClerkId: v.optional(v.string()), // if occupied
// }),

});

