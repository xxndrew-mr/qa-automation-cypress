# ⚙️ Cypress Login Automation Test

![Node.js](https://img.shields.io/badge/node.js-v18.x-green?logo=node.js)
![Cypress](https://img.shields.io/badge/Cypress-E2E%20Test-17202C?logo=cypress&logoColor=white)
![Status](https://img.shields.io/badge/status-working-success)
![Platform](https://img.shields.io/badge/tested-on%20Windows-blue)

Simple UI automation testing project using **Cypress** to test a custom login form.

---

## 📋 Test Scenarios

| Scenario                        | Expected Result           |
|---------------------------------|---------------------------|
| ✅ Login with valid credentials | Login success message     |
| ❌ Login with invalid data      | Show "Invalid credentials"|

---

## 🚀 How to Run This Project

### 🔧 Install Dependencies
```bash
npm install
http-server
# or use a port
http-server -p 8080
Then open in browser:
http://127.0.0.1:8080/login.html
npx cypress run --spec "cypress/e2e/login.cy.js"



