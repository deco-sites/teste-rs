import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 518,
  site: "teste-rs",
  domains: ["teste-rs.deco.site"],
});