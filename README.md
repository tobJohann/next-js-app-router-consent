# 🍪 DSGVO-konformer Cookie Consent für Next.js (App Router)

Dieses Projekt demonstriert eine modulare Consent-Lösung für **Next.js (App Router)**, komplett mit **Material UI**-UI,
**Google Consent Mode** und lokalem `localStorage`. Die Library ist vollständig **DSGVO-konform**, **theme-basiert** und
**lizenzkostenfrei zu nutzen**.

---

## 🚀 Features

- **DSGVO-konformes Consent Banner** mit granularer Steuerung (Kategorien & Details)
- **Google Consent Mode** Integration („analytics_storage“, „ad_storage“, etc.)
- Vollständig auf **MUI Theme** ausgerichtet – passt sich automatisch dem Design an
- Zustandsspeicherung via `localStorage`
- **SEO- & Performance-freundlich**: Keine externen Scripts oder Consent-Provider
- Modularer Aufbau – leicht in bestehende Projekte integrierbar und anpassbar

---

## 📦 Integration

1. ConsentProvider im Layout einfügen

```tsx
import { ConsentProvider } from './context/ConsentContext'

<
ThemeProvider
theme = { theme } >
  < CssBaseline / >
  < ConsentProvider >
  { children }
</ConsentProvider>
</ThemeProvider>
```

2. Banner-Komponente einbinden

```tsx
'use client'
import CookieConsent from './components/CookieConsent'

export default function Page() {
  return (
    <>
      <CookieConsent/>
      {/* Weitere Inhalte */}
    </>
  )
}
```

3. Google Tag Manager (optional)
   Falls verwendet, sollte handleGoogleConsent im Tag Manager berücksichtigt werden. Der Code nutzt intern
   `gtag('consent')`
   mit dem Google Consent Mode.

## 🔧 Konfigurierbarkeit

- Anpassung der Kategorien über data.ts
- Styling vollständig durch Material UI Theme steuerbar
- Unterstützung für weitere Anbieter (z. B. Facebook, Matomo) leicht erweiterbar
- Granulare Detailsteuerung mit verschachtelten Checkboxen

## 🛠 Beispiel: Nutzung der Hooks

```tsx
'use client'
import { useConsentDialog } from './hooks/useConsentDialog'

const Button = () => {
  const dialog = useConsentDialog()
  return <button onClick={dialog.open}>Cookie-Einstellungen</button>
}
```

## 📚 Technologien

- React 18
- Next.js (App Router)
- Material UI (v5)
- TypeScript
- Google Consent Mode
- Local Storage
