# ⚙️ Cypress Login Automation Test

![CI](https://github.com/xxndrew-mr/qa-automation-cypress/actions/workflows/test.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-v18.x-green?logo=node.js)
![Cypress](https://img.shields.io/badge/Cypress-14.x-17202C?logo=cypress&logoColor=white)
![Tests](https://img.shields.io/badge/tests-2%20passing-brightgreen)
![Status](https://img.shields.io/badge/status-stable-blue)

---

## 📋 What’s Tested

✅ Login dengan data valid  
❌ Login dengan data invalid

Semua skenario menggunakan Cypress automation dan data test eksternal dari `fixtures/users.json`.

---

## 🚀 Cara Menjalankan Project (Lokal)

### 1. Install dependency
```bash
npm install
```

### 2. Jalankan local server untuk login.html
```bash
npx http-server -p 8080
```
Buka: `http://127.0.0.1:8080/login.html`

### 3. Jalankan test (CLI headless mode)
```bash
npx cypress run
```

### 4. Jalankan test via GUI (opsional)
```bash
npx cypress open
```

---

## 📄 HTML Test Report (Lokal)

📁 [Lihat Report HTML](./cypress/reports/mochawesome.html)

🧾 Dihasilkan otomatis oleh `mochawesome` setiap kali test dijalankan via `npx cypress run`.

---

## ✅ Latest GitHub Actions Run

Cypress test dijalankan otomatis setiap kali:
- Push ke branch `main`
- Pull request baru

📍 Cek di tab [Actions](https://github.com/xxndrew-mr/qa-automation-cypress/actions)

---

## 📂 Struktur Project

```
qa-automation-cypress/
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js
│   ├── fixtures/
│   │   └── users.json
│   ├── reports/
│   │   └── mochawesome.html
│   └── support/
│       └── commands.js
├── .github/
│   └── workflows/test.yml
├── login.html
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## 📦 Dev Dependencies

- Cypress v14.x
- Mochawesome
- http-server
- GitHub Actions

---

## 💡 Tools Digunakan

- [Cypress](https://www.cypress.io/)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)
- [GitHub Actions](https://github.com/features/actions)
- [http-server](https://www.npmjs.com/package/http-server)

---

## 👨‍💻 Author

**Andre Marshandito**  
🔗 GitHub: [@xxndrew-mr](https://github.com/xxndrew-mr)

---

## 🤝 Contributing

Pull requests welcome. Feel free to fork and improve 👌

---

