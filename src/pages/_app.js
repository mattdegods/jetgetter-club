import "../styles/globals.css";
import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// import { tokenAuthFetchMiddleware } from "@strata-foundation/web3-token-auth";
// import { getToken } from "../utils";
import DEFAULTS from "../globals";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import generalConfig from "../configs/general.config";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const DeadGods = ({ Component, pageProps }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork[DEFAULTS.CLUSTER];

  // You can also provide a custom RPC endpoint.
  const endpoint = DEFAULTS.HTTP_RPC;

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  // const connectionConfig = {
  //     commitment: "confirmed",
  //     fetchMiddleware: tokenAuthFetchMiddleware({
  //       tokenExpiry: 180000,
  //       getToken,
  //     }),
  //   };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <!-- Primary Meta Tags --> */}
        <title>JetGetter Club</title>
        <meta name="title" content={`JetGetter Club`} />
        <meta
          name="description"
          content={`Welcome to the JetGetter Club.`}
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${generalConfig.baseUrl}`} />
        <meta property="og:title" content={`JetGetter Club`} />
        <meta
          property="og:description"
          content={`Welcome to the JetGetter Club.`}
        />
        <meta
          property="og:image"
          content={`https://${generalConfig.baseUrl}/images/meta.png`}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://${generalConfig.baseUrl}`} />
        <meta property="twitter:title" content={`JetGetter Club`} />
        <meta
          property="twitter:description"
          content={`Welcome to the JetGetter Club.`}
        />
        <meta
          property="twitter:image"
          content={`https://${generalConfig.baseUrl}/images/meta.png`}
        />
      </Head>
      {/* <ConnectionProvider endpoint={endpoint} config={connectionConfig}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider> */}
            <Component {...pageProps} />
          {/* </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      <Toaster /> */}
    </>
  );
};

export default DeadGods;
