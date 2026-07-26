# CTF Tracker

A full-stack, high-performance dashboard designed for penetration testers and cybersecurity students to track Capture The Flag (CTF) targets and internal network machines. Manage target IPs, track progression statuses, and maintain a clear overview of active bounties in a modern, dark-themed interface.

---

## Tech Stack

| Layer          | Technology       |
| :------------- | :--------------- |
| **Frontend**   | React, Vite      |
| **Backend**    | Node.js, Express |
| **Database**   | SQLite           |
| **Validation** | Zod              |
| **Language**   | TypeScript       |
| **Styling**    | Tailwind CSS     |

---

## Key Features

- **Full-Stack Architecture:** Seamless integration between a React frontend and an Express REST API.
- **Strict Data Validation:** Backend schemas powered by Zod to ensure data integrity and prevent malformed requests.
- **Dynamic Dashboard:** Real-time filtering of targets (Active vs. Rooted/Abandoned) with interactive status updates.
- **Modular UI:** Clean component architecture utilizing custom Modals and isolated state management.

---

## Folder Structure

```text
ctf-tracker/
├── backend/            # API Server & Database
│ ├── src/              # Express routes, Zod schemas and DB logic
│ ├── tracker.db        # SQLite Database file
├── frontend/           # React UI
│ ├── src/              # React components, interfaces and views
│ ├── index.html        # Vite HTML template
└── README.md           # This file
```

---

## Local Development

1. **Clone the repository**

```bash
    git clone https://codeberg.org/rterminus/ctf-tracker.git
    cd ctf-tracker
```

2. **Install dependencies**
   Install dependencies separately on front and backend:

```bash
   cd frontend
   pnpm install
   cd ../backend
   pnpm install
```

3. **Start the backend server**

```bash
   cd backend
   pnpm run dev
```

4. **Start the frontend application**

```bash
   cd frontend
   pnpm run dev
```

---

## Author

**Renan Pontes (rterminus)**

- [Codeberg](https://codeberg.com/rterminus/)
- [GitHub](https://github.com/rterminus/)
- [LinkedIn](https://www.linkedin.com/in/renanspontes/)
