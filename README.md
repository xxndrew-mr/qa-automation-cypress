# ⚙️ Cypress Login Automation Test

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green?logo=node.js)
![Cypress](https://img.shields.io/badge/Cypress-14.x-17202C?logo=cypress&logoColor=white)
![Tests](https://img.shields.io/badge/tests-2%20passing-brightgreen)
![Status](https://img.shields.io/badge/status-stable-blue)
![Platform](https://img.shields.io/badge/tested-on%20Windows%2011-blue)

---

## 📋 What’s Tested

✅ Login dengan data valid  
❌ Login dengan data invalid

Semua skenario menggunakan Cypress automation dan data test eksternal dari `fixtures/users.json`.

---

## 🚀 Cara Menjalankan Project

### 1. **Install dependency**
```bash
npm install
```

### 2. **Jalankan local server untuk login.html**
```bash
http-server -p 8080
```

Buka di browser:  
`http://127.0.0.1:8080/login.html`

### 3. **Jalankan test (CLI headless mode)**
```bash
npx cypress run
```

### 4. **Jalankan test via GUI**
```bash
npx cypress open
```

---

## 📄 HTML Test Report

Hasil test otomatis dibuat dalam format HTML oleh reporter `mochawesome`.

📁 [Lihat Report HTML](./cypress/reports/mochawesome.html)

📍 Lokasi:  
`/cypress/reports/mochawesome.html`

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
├── login.html
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## 💡 Tools Digunakan
- [Cypress](https://www.cypress.io/)
- [http-server](https://www.npmjs.com/package/http-server)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)

---

## 👨‍💻 Author

**Andre Marshandito**  
🌐 GitHub: [@xxndrew-mr](https://github.com/xxndrew-mr)

---

## 🤝 Contributing

Pull requests welcome. Feel free to fork and improve 👌

