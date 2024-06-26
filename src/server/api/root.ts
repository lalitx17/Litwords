import { postRouter } from "~/server/api/routers/posts";
import { authRouter } from "./auth";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  posts: postRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
