"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect, useLayoutEffect } from "react";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);
  const t = localStorage.getItem("theme");
  const handleTheme = () => {
    t && setMounted(true);
  };

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider>
      {handleTheme}
      {children}
    </ThemeProvider>
  );
}
