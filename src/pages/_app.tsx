import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Header } from "../components/Header";
import { Toaster } from "react-hot-toast";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
