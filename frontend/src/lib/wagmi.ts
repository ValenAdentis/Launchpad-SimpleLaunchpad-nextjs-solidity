import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { localhost, mainnet, sepolia } from "wagmi/chains";

const projectId =
  process.env.NEXT_PUBLIC_WC_PROJECT_ID || "00000000000000000000000000000000";

export const wagmiConfig = getDefaultConfig({
  appName: "LaunchPad Simple",
  projectId,
  chains: [localhost, sepolia, mainnet],
  transports: {
    [localhost.id]: http("http://127.0.0.1:8545"),
    [sepolia.id]: http(),
    [mainnet.id]: http(),
  },
  ssr: true,
});
