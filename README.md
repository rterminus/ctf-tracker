# CTF Tracker

A full-stack, high-performance dashboard designed for penetration testers and
cybersecurity students to track Capture The Flag (CTF) targets and internal network
machines. Manage target IPs, track progression statuses, and maintain a clear
overview of active bounties in a modern, dark-themed interface.

---

## 🛠 Tech Stack

| Layer          | Technology       |
| :------------- | :--------------- |
| **Frontend**   | React            |
| **Backend**    | Node.js, Express |
| **Validation** | Zod              |
| **Language**   | TypeScript       |
| **Styling**    | Tailwind CSS     |

---

## 🚀 Key Features

- **Full-Stack Architecture:** Seamless integration between a React frontend and
  an Express REST API.
- **Strict Data Validation:** Backend schemas powered by Zod to ensure data
  integrity and prevent malformed requests.
- **Dynamic Dashboard:** Real-time filtering of targets (Active vs. Rooted/Abandoned)
  with interactive status updates.
- **Robust Error Handling:** Integrated visual feedback banners for API timeouts
  and validation rejections.
- **Modular UI:** Clean component architecture utilizing custom Modals and isolated
  state management.

---

## 📂 Folder Structure

```text
ctf-tracker/
├── backend/                  # API Server
│   └── server.ts             # Express routes and Zod schemas
├── src/
│   ├── components/           # React components (Dashboard, Panel, TargetTable,
Modals)
│   ├── types/                # TypeScript interfaces
│   ├── App.tsx               # Main layout and routing wrapper
│   └── main.tsx              # React entry point
├── package.json              # Dependencies
└── README.md                 # Project documentation
```
