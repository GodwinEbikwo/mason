import "../styles/base.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return <Component {...pageProps} key={router.asPath} />;
}
