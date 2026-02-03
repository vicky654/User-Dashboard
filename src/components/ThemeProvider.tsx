import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'semi-dark' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get theme from localStorage or default to 'light'
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('privacy-dashboard-theme') as Theme;
      return stored || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('privacy-dashboard-theme', theme);
    
    // Remove all theme classes
    document.documentElement.classList.remove('light', 'semi-dark', 'dark');
    
    // Add current theme class
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
