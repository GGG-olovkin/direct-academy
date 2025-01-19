"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, memo } from "react";

const ThemeToggler = memo(() => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        // Sun icon
        <svg
          className="fill-primary"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 11.182A3.182 3.182 0 1 0 8 4.818a3.182 3.182 0 0 0 0 6.364zM8 3.75V1.837M8 14.163v-1.913M3.003 8.75H1.837M14.163 8.75h-1.166" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        // Moon icon
        <svg
          className="fill-primary"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.353 10.62c-.107-.18-.407-.25-.587-.13a5.57 5.57 0 0 1-2.199.43c-2.886 0-5.22-2.333-5.22-5.22 0-1.073.34-2.113.993-2.993.147-.193.093-.48-.093-.627a.637.637 0 0 0-.34-.1c-.087 0-.173.02-.253.06C4.6 3.41 3.34 5.583 3.34 7.95c0 3.89 3.167 7.05 7.05 7.05 2.367 0 4.54-1.26 5.68-3.31.107-.2.04-.46-.16-.62z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
});

ThemeToggler.displayName = 'ThemeToggler';

export default ThemeToggler;
