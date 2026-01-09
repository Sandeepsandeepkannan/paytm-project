Paytm App – Full Stack Wallet Application

A full-stack digital wallet application inspired by Paytm, built to simulate real-world payment and wallet functionalities.

 Features

User authentication and authorization
Wallet balance creation and tracking
Secure peer-to-peer money transfers
Transaction validation and error handling
RESTful APIs for wallet and transaction management

Tech Stack

Frontend: React.js, TypeScript, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT-based authentication

Overview

This project demonstrates end-to-end full-stack development, including frontend UI design, backend API development, database integration, and secure data flow between client and server. It focuses on clean architecture, scalable API design, and practical payment-system concepts.

Follow these steps to run the project locally.

📥 Clone the Repository
git clone https://github.com/Sandeepsandeepkannan/paytm-project.git
cd paytm-project

📦 Install Dependencies
🔹 Backend Setup
cd backend
npm install

🔹 Frontend Setup
cd frontend
npm install

⚙️ Environment Variables

Create a .env file inside the backend folder and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Make sure MongoDB is running or use MongoDB Atlas.


▶️ Run the Application
Start Backend Server
cd backend
npm run dev

Start Frontend Server
cd frontend
npm run dev


Frontend will run on:

http://localhost:5173

Backend will run on:

http://localhost:3000

✅ Usage

Register or log in to your account
Create and manage wallet balance
Send money to other users
View transaction history

📝 Notes

This project is for learning and demonstration purposes
No real money transactions are involved
