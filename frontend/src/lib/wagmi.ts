import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { base, baseSepolia, localhost } from "wagmi/chains";

const projectId =
  process.env.NEXT_PUBLIC_WC_PROJECT_ID || "00000000000000000000000000000000";

export const wagmiConfig = getDefaultConfig({
  appName: "LaunchPad Simple",
  projectId,
  chains: [base, baseSepolia, localhost],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
    [localhost.id]: http("http://127.0.0.1:8545"),
  },
  ssr: true,
});
