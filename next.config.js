/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { env } from "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  env: {
    PUBLIC_PARTNERS_GOOGLE_MAPS_LIST_URL:
      env.PUBLIC_PARTNERS_GOOGLE_MAPS_LIST_URL ?? "",
    PUBLIC_PARTNERS_GOOGLE_MAPS_EMBED_URL:
      env.PUBLIC_PARTNERS_GOOGLE_MAPS_EMBED_URL,
    PUBLIC_PARTNERS_MAPS_FAQ_URL: env.PUBLIC_PARTNERS_MAPS_FAQ_URL,
  },
};

export default config;
