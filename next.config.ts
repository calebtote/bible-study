import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Let `next dev` be reached from other devices on the local network.
   *
   * The dev server blocks cross-origin requests to dev-only assets unless the origin is
   * allowed here, and the block is quiet: the page loads, the study reads normally, and
   * the one lazily imported chunk — MapLibre — never arrives, so the map pane sits empty
   * with no error anywhere. Opening the study on a phone via the machine's LAN address
   * is exactly how this app gets checked on a real phone, so the common private hostnames
   * are allowed. Each `*` matches one label, so this is the 192.168 subnet and mDNS
   * `.local` names, not the open internet. Production (`next start`) is unaffected;
   * it has no dev endpoints to protect.
   */
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "*.local"],
};

export default nextConfig;
