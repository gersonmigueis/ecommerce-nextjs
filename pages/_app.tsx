import 'bootstrap/dist/css/bootstrap.min.css';
import App, { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;