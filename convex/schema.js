import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users:defineTable({
        name:v.string(),
        email:v.string(),
        picture:v.string(),
        uid:v.string(),
    }),
    workspaces:defineTable({
        messages:v.string(),
        fileData:v.optional(v.any()),
        user:v.id("users")
    }),
});