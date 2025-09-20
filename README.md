# Project Ants Website

A modern full-stack game showcase website built with Angular (frontend) and Node.js (backend).

## 🚀 Tech Stack

**Frontend:**
- Angular 20 (latest version)
- TypeScript
- SCSS
- Responsive design

**Backend:**
- Node.js
- Express.js
- TypeScript
- RESTful API

## ⚙️ Requirements
- Node.js >= 20.19.0 (Angular 20 requirement)
- npm (bundled with Node)

## 🎨 Theme & Styling
- Colore accent configurato in `:root` come `--color-accent: #26748EFF` (RGBA hex, alpha support).
- Variabili definite in `frontend/src/styles.scss`:
  - `--color-accent` / `--color-accent-rgb`
  - `--color-text`, `--color-text-dim`
  - Overlay gradient configurabile.
- Per cambiare il tema modifica i valori nel blocco `:root`.
- Background master applicato su `html` con immagine: `/Content/images/01_Title_background.png`.
  - Se vuoi un background differente per una pagina futura, puoi sovrascrivere con una classe sul `body` o su un wrapper.

## 📁 Project Structure

```
├── frontend/           # Angular application
│   ├── public/
│   │   └── Content/    # (Assets statici personalizzati: background, logo, immagini)
│   ├── src/
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── styles.scss # Usa path /Content per background
│   │   └── app/
│   │       └── components/
├── backend/            # Node.js API server
│   ├── src/server.ts
├── package.json        # Root scripts (start con concurrently)
└── README.md
```

## 🛠️ Development Setup

### Installazione
```powershell
npm run install:all
```

### Avvio sviluppo (frontend + backend)
```powershell
npm start
```
- Frontend: http://localhost:4200
- Backend API: http://localhost:3000

### Avvii separati
```powershell
npm run start:backend   # solo API
npm run start:frontend  # solo Angular
```

### Build produzione
```powershell
npm run build
```

## 🌐 API Endpoints
- `GET /api/health`
- `GET /api/game-info`
- `GET /api/gallery` (placeholder)
- `POST /api/contact` (placeholder)

## 🖼️ Gestione Asset (Cartella Content)
Tutti gli asset personalizzabili (logo, background, immagini future) vanno in:
```
frontend/public/Content
```
File placeholders creati nel codice:
- `/Content/logo-placeholder.png` → sostituisci con il tuo `logo.png`
- `/Content/background-placeholder.jpg` → sostituisci con il tuo `background.jpg` (o .png)

### Come sostituire
1. Copia i tuoi file nella cartella `frontend/public/Content`.
2. Mantieni i nomi (oppure modifica i path in:
   - `frontend/src/styles.scss` (background)
   - `frontend/src/app/components/header/header.html` (logo)
3. Salva: Angular dev server ricarica automaticamente.

### Perché `public/Content`?
`public/` è configurata come sorgente degli asset statici. I path assoluti `/Content/...` funzionano direttamente nel browser senza import JS.

## 🔧 Note di Sviluppo
- Hot reload per frontend e backend.
- CORS abilitato lato backend.
- Assicurati di usare Node >= 20.19 per evitare errori CLI.

## 🧪 Test
Frontend unit test:
```powershell
cd frontend
npm test
```
(Nessun test backend definito al momento.)

## 🚀 Deployment
Frontend e backend sono separati; per servire build frontend dallo stesso server Node dovresti aggiungere middleware static (non ancora presente).

## 🧭 Roadmap Breve
- Implementare gallery real
- Form contatti con persistenza
- Deploy unificato (reverse proxy o static serve)
- Test end-to-end

## ❓ Troubleshooting Rapido
| Problema | Soluzione |
|----------|-----------|
| Angular non parte / Node version error | Aggiorna Node >= 20.19 |
| `Failed to read index HTML file` | Verifica esistenza `src/index.html` |
| Logo non appare | Controlla path `/Content/logo.png` |
| Background non cambia | Cache browser / nome file diverso da placeholder |

## 📝 Licenza
ISC

---
Se vuoi, posso aggiungere un README dedicato al solo frontend con istruzioni asset più verbose. Fammi sapere.
