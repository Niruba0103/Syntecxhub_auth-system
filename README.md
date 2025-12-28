# Authentication System with JWT

This is a simple **Node.js + Express + MongoDB authentication system** with:

- User signup (`/api/auth/signup`)
- User login (`/api/auth/login`)
- JWT-protected routes (`/api/profile`)
- Password hashing with bcrypt
- Token-based authentication with JWT
- Error handling for invalid/expired tokens

---

## **Tech Stack**

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs

---

## **Setup & Installation**

1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/auth-system.git
cd auth-system
````

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file**

> ⚠️ Do **not** push `.env` to GitHub. Use `.env.example` for reference.

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authDB
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h
```

4. **Start the server**

```bash
node server.js
# OR use nodemon for auto-restart
nodemon server.js
```

5. **MongoDB**

* Make sure MongoDB is running locally (`mongod`)
* Database `authDB` and `users` collection will be created automatically on first signup.

---

## **.env.example**

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authDB
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h
```

> This file can be pushed to GitHub safely as a template for environment variables.

---

## **API Endpoints**

### **1. Signup**

```
POST /api/auth/signup
```

**Body:**

```json
{
  "username": "niruba",
  "email": "niruba@gmail.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "User registered successfully"
}
```

---

### **2. Login**

```
POST /api/auth/login
```

**Body:**

```json
{
  "email": "niruba@gmail.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "<JWT token>"
}
```

---

### **3. Profile (Protected)**

```
GET /api/profile
```

**Headers:**

```
Authorization: Bearer <JWT token>
```

**Response:**

```json
{
  "message": "Access granted",
  "user": {
    "userId": "..."
  }
}
```

---

## **Error Handling**

* **No token:** `{"message":"No token provided"}`
* **Invalid token:** `{"message":"Token expired or invalid"}`
* **Wrong credentials:** `{"message":"Invalid credentials"}`

---

## **Notes**

* `.env` is ignored by GitHub; use `.env.example` as a reference.
* Passwords are **hashed using bcrypt** for security.
* JWT tokens expire after `JWT_EXPIRES_IN` duration (`1h` by default).
* Make sure to restart the server after any changes.

---

## **Author**

Niruba Ninmathirasa

```
