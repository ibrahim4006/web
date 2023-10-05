"use client";

import { useState, useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import CustomCursor from "@/components/common/CustomCursor";
import Header from "@/components/common/Header";
import { SubjectProvider } from "@/context/SubjectContext";

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    ready && (
      <>
        <SubjectProvider>
          <Header />
          <CustomCursor />
          <Component {...pageProps} />
        </SubjectProvider>
      </>
    )
  );
}
