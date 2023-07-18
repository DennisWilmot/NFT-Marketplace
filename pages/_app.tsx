import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
//import "../styles/globals.css";
import {ChakraProvider} from "@chakra-ui/react";
import { Sepolia } from "@thirdweb-dev/chains";
import {Navbar} from "../components/Navbar";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <ThirdwebProvider activeChain={Sepolia}>
      <ChakraProvider>
        <Navbar/>
      <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
