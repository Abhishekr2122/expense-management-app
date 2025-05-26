💸 Expense Management Application

A fully functional Expense Management Application where users can log in to track their expenses and admins can manage and approve or reject those expenses. Built with React, this app demonstrates clean UI, role-based access, and smart data handling features.

🚀 Live Demo: https://themavericstechnologies-expense-app.netlify.app/

📌 Overview

This app supports two types of users:

👤 User: Can add and view expenses, sort records. 🛠️ Admin: Can change the status of each expense (Pending, Approved, Rejected).

All updates by the admin are visible to the users even after logout/login, providing a seamless and real-time expense management experience.

🔐 Authentication

Any user can log in as either a user or admin. Role-based interface and access control.

👤 User Features

➕ Add New Expense (Title, Amount, Category, Date) 🔃 Sort Expenses by any table column (title, amount, date, category) in ascending/descending order — alphabetic or numeric. 📊 View total expenses dynamically based on admin-approved status. 👁️ See updated statuses (Pending / Approved / Rejected) as modified by the admin.

🛠️ Admin Features

🧾 View all submitted expenses by users ✍️ Change Expense Status:

Pending (default)
✅ Approved
❌ Rejected 💰 Total amount shown in the card is based on approved expenses only. 🔄 Status changes persist and are visible to users after admin logout.
🧑‍💻 How to Run It Locally

🚀 Getting Started

📁 Clone the Repository

git clone https://github.com/your-username/expense-management-app.git
cd expense-management-app
npm install
npm run dev
