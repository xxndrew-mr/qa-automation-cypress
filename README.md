# Cypress Login Automation Test

This is a simple UI automation project using [Cypress](https://www.cypress.io/) to test a basic login form.

## 🔧 Tech Stack
- Cypress v14.x
- Node.js
- http-server (for serving local HTML file)

## 🧪 What it tests
- ✅ Login with valid credentials (`admin@mail.com` / `123456`)
- ✅ Login with invalid credentials (`wrong@mail.com` / `wrongpass`)

## 🚀 How to Run

1. **Install dependencies:**
```bash
npm install
http-server
# or specify port
http-server -p 8080
npx cypress run --spec "cypress/e2e/login.cy.js"
