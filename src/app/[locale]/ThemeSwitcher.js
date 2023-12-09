import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>Dark</button>
      ) : (
        <button onClick={() => setTheme("light")}>Light</button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
