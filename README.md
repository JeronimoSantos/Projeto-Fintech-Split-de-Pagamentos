# 🚀 Fintech API: Payment Split Engine
This is a REST API developed in Node.js that simulates the operation of a payment engine with split values ​​between the platform and sellers. The project applies professional architectural standards to ensure scalability and easy maintenance.

## 🎯 Main Objective
Build a Rest API using Node.js, Express with assistance in organizing using the MVC architecture (Model View and Controller).

## 🚨 Problematization
Marketplace platforms need to split payments automatically. This API solves this by calculating the platform's commission and the seller's net balance at the time of the transaction, ensuring the integrity of financial data.

## 💡 Solution
Create an API that simulates what Stripe or Pagar.me do: split a payment between a platform and a seller.

## 🧰 Technologies Used

| Technologies | Version |
|--------------|---------|
| ![GIT][git-url] | v2.46.0.1 |
| ![Node.js][node-url] | v22.15.0 |
| ![Express][express-url] | v5.2.1 |

## 📚 Process elaboration
All the key steps I needed in developing and completing the problem.

- First, I started organizing the project folders and files using the MVC architecture.
- Secondly, I started by developing the mock database that would be used by the API.
- Third, I start building the business rules for the application in the controller.
- Fourth, I focused on developing the application model by adjusting the database integration.
- Fifth, I started by defining the api routes following the HTTP methods (Get, Post, Put and Delete).
- Finally, add a test file to the api routes

## 📝 Prerequisites
Before you begin, make sure you have the following installed on your computer:

1. [**Git**](https://git-scm.com/downloads) – to clone the project repository.
2. [**Node.js**](https://nodejs.org/) - to run locally.
3. [**VS Code**](https://code.visualstudio.com/) *(Optional, but recommended.)*

## ✅ Step by step for Installation

1. Clone the project repository to your machine:
```
git clone https://github.com/JeronimoSantos/Projeto-Fintech-Split-de-Pagamentos.git
```

2. Go to the project folder:
```
cd projeto-fintech-split-de-pagamentos
```

3. Install project dependencies:
```
npm install
```

4. To ensure that the financial rules are correct, run the native test suite:
```
node --test src/test/test.js
```

<!-- LINKS THE BAGDES -->
[javascript-url]: https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black
[git-url]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[node-url]: https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=nodesdotjs&logoColor=white
[express-url]: https://img.shields.io/badge/express.js-%23000000.svg?style=for-the-badge&logo=express&logoColor=white
