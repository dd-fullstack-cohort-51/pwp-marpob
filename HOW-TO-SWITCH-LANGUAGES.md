# How the Language-Switching System Works

## Overview

This site uses a **React Context-based language toggle** that switches between English (`en`) and Czech (`cz`) without reloading the page. Clicking the toggle button in the navbar instantly re-renders every translated string on the current page.

## Architecture

Three pieces work together:

### 1. `src/context/LanguageContext.tsx` — the shared state

Creates a React Context that holds the current language and a function to toggle it. Also exports a `useLanguage` hook so any component can read or change the language.

```tsx
import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "cz";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const toggleLang = () => setLang((prev) => (prev === "en" ? "cz" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
```

### 2. `src/main.tsx` — wraps the app in the provider

`<LanguageProvider>` sits outside `<BrowserRouter>` so every route and component has access to the language state:

```tsx
import { LanguageProvider } from "./context/LanguageContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* ...routes... */}
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
```

### 3. `src/components/navigation.tsx` — the toggle button

The navbar calls `toggleLang()` when clicked. The button label shows "Česky" when the current language is English, and "English" when it's Czech:

```tsx
import { useLanguage } from "../context/LanguageContext.tsx";

export function Navigation() {
    const { lang, toggleLang } = useLanguage();
    return (
        <Navbar fluid rounded>
            {/* ...other links... */}
            <NavbarLink as="button" onClick={toggleLang}>
                {lang === "en" ? "Česky" : "English"}
            </NavbarLink>
        </Navbar>
    );
}
```

## How to Add Translations to a New Page

Follow these steps, using `src/routes/home/home.tsx` as the working example.

### Step 1 — Import `useLanguage`

At the top of your page component file:

```tsx
import { useLanguage } from "../../context/LanguageContext";
```

### Step 2 — Define a `text` object with `en` and `cz` keys

Place this **outside** the component function. Each key holds all the strings that page needs:

```tsx
const text = {
    en: {
        heading: "Martin Poboril",
        subtitle: "Full Stack Web Developer and Tennis Coach",
        aboutMe: "About Me",
        // ...add all your English strings here
    },
    cz: {
        heading: "Martin Poboril",
        subtitle: "Full Stack Webový Vývojář a Tenisový Trenér",
        aboutMe: "O mně",
        // ...add all your Czech strings here
    },
};
```

Both `en` and `cz` must have the **exact same keys** so TypeScript won't complain.

### Step 3 — Read the language and select translations inside the component

```tsx
export default function Home() {
    const { lang } = useLanguage();
    const t = text[lang];

    return (
        // ...JSX...
    );
}
```

- `useLanguage()` gives you the current `lang` value (`"en"` or `"cz"`)
- `text[lang]` picks the right translation object
- Store it in `t` for short, easy access

### Step 4 — Replace hardcoded strings with `{t.key}`

Before:
```tsx
<h1>Martin Poboril</h1>
<p>Full Stack Web Developer and Tennis Coach</p>
```

After:
```tsx
<h1>{t.heading}</h1>
<p>{t.subtitle}</p>
```

For attributes like `placeholder`, use curly braces without quotes:
```tsx
<input placeholder={t.emailPlaceholder} />
```

## How It Works Under the Hood

1. `LanguageProvider` holds a `useState` with the current language (`"en"` by default).
2. When the user clicks the toggle button, `toggleLang` flips the state between `"en"` and `"cz"`.
3. React Context propagates the new `lang` value to every component that calls `useLanguage()`.
4. Each page component runs `text[lang]` which picks the matching translation object, and React re-renders only the parts of the DOM where the strings changed.

No page reload. No URL change. Just a React state update that flows through Context.
