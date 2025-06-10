import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createUser = mutation({
    args:{clerkId: v.string(),email: v.string(),role: v.string()},
    handler:async(ctx, args)=>{
        const newUser = await ctx.db.insert("registeration",{clerkId:args.clerkId,email:args.email,role:args.role})
        return newUser
    }

})