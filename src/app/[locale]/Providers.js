"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect, useLayoutEffect } from "react";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
}
