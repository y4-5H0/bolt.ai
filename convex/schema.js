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
        name:v.string(),
        owner:v.string(),
        members:v.array(v.string()),
        id:v.string(),
    }),
});