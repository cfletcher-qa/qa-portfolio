# Postman Collections — QA Portfolio

This folder contains exported Postman collections used for API testing in the QA Portfolio.  
It demonstrates practical API testing skills including CRUD operations, positive and negative test cases, and environment variable usage.

---

## 📌 Collection Included

### **PetStore API Testing**
- Public REST API used for QA practice
- Full CRUD flow:
  - **POST /pet** — Create a new pet
  - **GET /pet/{petId}** — Retrieve pet details
  - **PUT /pet** — Update pet information
  - **DELETE /pet/{petId}** — Delete pet
- Environment variable `petId` is used to dynamically track created pets

---

## 🧰 Tools & Features
- Postman (GUI)
- Environment variables
- Tests written in JavaScript using `pm.test`
- Positive and negative test cases included
- Easily importable into Postman for hands-on testing

---

## ✅ How to Use
1. Open Postman → click **Import** → select the JSON collection file.  
2. Select the **PetStore Environment** to enable `{{baseUrl}}` and `{{petId}}` variables.  
3. Run requests individually or in sequence using the **Collection Runner**.  
4. Observe test results in the **Tests** tab of each request.

---

## 📈 Learning Outcome
- Demonstrates the ability to write structured API test cases  
- Shows understanding of CRUD operations, status code validation, and response body checks  
- Highlights practical QA interview skills using real API testing scenarios
