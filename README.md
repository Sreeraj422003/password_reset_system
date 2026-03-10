# Secure Password Reset System

## Project Overview
This project implements a secure Forgot Password and Reset Password flow.  
It allows users to request a password reset link and securely update their password using a time-limited token.

The system prevents security vulnerabilities such as email enumeration, token misuse, and weak password submission.

---

## Technology Stack

Backend
- Node.js
- Express.js
- MongoDB


Frontend
- HTML
- JavaScript

Security Libraries
- bcrypt (password hashing)
- crypto (secure token generation)

---

## Project Structure

password_reset_system
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── forgot-password.html
│   ├── reset-password.html
│   └── script.js
│
└── README.md

---

## Setup Instructions

### 1. Clone the repository

git clone https://github.com/Sreeraj422003/password_reset_system.git

### 2. Navigate to project folder

cd password_reset_system

### 3. Install dependencies

npm install

### 4. Start MongoDB

Make sure MongoDB is running locally.

### 5. Run the backend server

node server.js

### 6. Open frontend

Open the forgot password page using Live Server or browser:

http://localhost:5500/frontend/forgot-password.html

---

## Password Reset Flow

1. User enters their email on the Forgot Password page.
2. The backend generates a secure reset token.
3. The token is stored in MongoDB with an expiration time.
4. A reset link containing the token is generated.
5. User opens the reset link.
6. User enters a new password.
7. Backend verifies the token and updates the password.

---

## Security Measures Implemented

### Secure Token Generation
A cryptographically secure token is generated using Node.js crypto module.

Example:
crypto.randomBytes(32)

### Token Expiration
Reset tokens expire after a specific time period to prevent misuse.

### Blind Email Validation
The system always returns the same response whether the email exists or not:

"If an account exists, a reset link has been sent."

This prevents attackers from discovering valid email addresses.

### Password Hashing
Passwords are securely hashed using bcrypt before storing in MongoDB.

### Single Use Tokens
After a password reset, the token is removed from the database so it cannot be reused.

### Weak Password Validation
The reset password page validates password strength to ensure:

- Minimum 8 characters
- At least one uppercase letter
- At least one number
- At least one special character

---

## Screenshots

## Screenshots

### Forgot Password Request

![Forgot Password](screenshots/forget pass.png)

### Weak Password Validation

![Weak Password](screenshots/weak validation.png)

### Successful Password Reset

![Password Reset Success](screenshots/correct pass.png)

## Reset page
![ Reset Page](screenshots/reset page.png)

## Link exist
![Link exist page](screenshots/link exist.png)

---

## Video Demonstration

Add your video explanation link here:

Example:

https://drive.google.com/your-video-link

---

## Author

Sreeraj