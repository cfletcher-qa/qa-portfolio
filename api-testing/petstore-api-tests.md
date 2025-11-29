# 🐾 PetStore API — Manual & Postman Testing Project

This project demonstrates API testing of the **Swagger PetStore API**, a public REST API commonly used for QA practice.

---

## 📌 Tools Used
- Postman  
- Swagger UI  
- JSON validators  

---

## 📘 Test Coverage

### **Endpoints Tested**
| Method | Endpoint |
|--------|----------|
| GET    | `/pet/{petId}` |
| POST   | `/pet` |
| PUT    | `/pet` |
| DELETE | `/pet/{petId}` |

### **Types of Testing**
- Positive scenarios  
- Negative scenarios  
- Validation of status codes  
- Response body validation  
- Error handling  
- Boundary testing  

---

## ✅ Positive Test Cases

### **TC01 — Create a Pet (POST /pet)**
**Steps**
1. Send a POST request to `/pet`  
2. Body includes valid ID, name, category, and status

**Expected**
- Status: **200**
- Response contains pet ID
- Response body matches sent values

---

### **TC02 — Get Pet by ID (GET /pet/{petId})**
**Steps**
1. Use the ID from TC01  
2. Send GET request

**Expected**
- Status: **200**
- Pet details match created data

---

### **TC03 — Update Pet (PUT /pet)**
**Steps**
1. Change pet name or status  
2. Send PUT request

**Expected**
- Status: **200**
- Updated fields appear correctly

---

## ❌ Negative Test Cases

### **TC04 — Get Pet with Invalid ID (GET /pet/abc)**
**Expected**
- Status: **400** or **404**
- Error message returned

---

### **TC05 — Create Pet with Missing Required Field**
Body missing `"name"`.

**Expected**
- Status: **400**
- Error shown in response

---

### **TC06 — Delete Non-Existent Pet**
Send DELETE using an unknown ID.

**Expected**
- Status: **404**
- Error message: "Pet not found"

---

## 📁 Postman Collection

Upload your exported collection file here once done.

Include:
- Requests  
- Environment variables  
- Test scripts (pm.expect)  

Example script:

```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
