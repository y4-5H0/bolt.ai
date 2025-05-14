import { mutation } from "./_generated/server";
import { v } from "./_generated/values";

export const CreateWorkspace = mutation({
    args: {
        messages: v.any(),
        user: v.id('users'),
    },
    handler: async ({ctx, args}) => {
        const result = await ctx.db.insert("workspaces", {
            messages: args.messages,
            user: args.user,
        });

    }

    })