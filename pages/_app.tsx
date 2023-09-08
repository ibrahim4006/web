"use client";

import {useState, useEffect } from "react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (router.isReady) {
      setReady(true)
    }
  }, [router.isReady])
  return ready && <Component {...pageProps} />
}
