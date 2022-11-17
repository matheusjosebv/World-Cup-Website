import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../container/Navbar/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath.split("/")[1];
    document.body.className = path;
  }, [router.asPath]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
