import "../styles/globals.scss";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

MyApp.propTypes = AppProps;
