import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // Only the isolated Domainfactory preview uses a subdirectory.
    basepath:
      typeof window !== "undefined" &&
      window.location.pathname.startsWith("/github-test/website-preview/")
        ? "/github-test/website-preview"
        : "/",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
