import { useEffect, useState } from "react";
import { CASE_STUDIES, type CaseStudy } from "./data/portfolioContent";

export type Route = { name: "home" } | { name: "case"; study: CaseStudy };

function parseHash(hash: string): Route {
  const match = hash.match(/^#\/casos\/([\w-]+)/);
  const study = match && CASE_STUDIES.find((item) => item.slug === match[1]);
  return study ? { name: "case", study } : { name: "home" };
}

/** Hash-based routing keeps deep links working on static hosting without server rewrites. */
export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", handleChange);
    return () => window.removeEventListener("hashchange", handleChange);
  }, []);

  return route;
}
