# EduCare – Interkulturelle Schulkommunikation

EduCare ist eine Webanwendung für die Kommunikation zwischen Lehrern und Eltern. Sie bietet einen Kalender für Schultermine, Krankmeldungen, Befreiungen und Einstellungen für Kinderprofile.

## Tech Stack

- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT Auth, bcryptjs, Joi Validation
- **Frontend:** React 18, React Router v6, Axios, React Icons

## Voraussetzungen

- Node.js (v18+)
- MongoDB (lokal oder [Atlas](https://www.mongodb.com/atlas))

## App starten

### 1. Backend

```bash
cd Backend
cp .env.example .env   # Anpassen: DB-URL und JWT_SECRET setzen
npm install
npm run dev            # Startet mit nodemon auf Port 3001
```

### 2. Frontend

```bash
cd Frontend/educare
npm install
npm start              # Startet auf Port 3000
```

## Projektstruktur

```
EduCare/
├── Backend/
│   ├── middleware/auth.js          # JWT Auth Middleware
│   ├── models/userModel.js        # User Schema + Auth Methoden
│   ├── routes/user.js             # API Routes (Register, Login, Logout)
│   ├── server.js                  # Express Server
│   ├── .env.example               # Umgebungsvariablen Vorlage
│   └── package.json
├── Frontend/educare/
│   ├── src/
│   │   ├── api.js                 # Axios Instance mit Interceptors
│   │   ├── context/AuthContext.js  # Auth State Management (React Context)
│   │   ├── components/            # UI Komponenten
│   │   │   ├── Calendar/          # Dynamischer Kalender
│   │   │   ├── Login/             # Login-Formular
│   │   │   ├── Register/          # Registrierung mit Rollenwahl
│   │   │   ├── ReportsPage/       # Krankmeldung & Befreiung
│   │   │   ├── Settings/          # Einstellungen & Kind hinzufügen
│   │   │   └── ProtectedRoute.js  # Auth-geschützte Routen
│   │   └── pages/                 # Seiten-Wrapper
│   └── public/
└── README.md
```

## API Endpunkte

| Methode | Route          | Beschreibung       | Auth |
|---------|----------------|--------------------|------|
| POST    | /user/register | Registrierung      | ❌   |
| POST    | /user/login    | Anmeldung          | ❌   |
| POST    | /user/logout   | Abmeldung          | ✅   |
| GET     | /user/me       | Profil abrufen     | ✅   |

## Team Educare

Ann-Marie Atzkern, Berfin Berg, Karmen Florentina Bulai, Ilayda Güner und Ece Sutanrikulu
