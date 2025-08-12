# RentIt: Full-Stack Rental Management System

## 📋 Project Overview
A comprehensive rental management platform with advanced user authentication, product listings, and order management.

---

## 🚀 Key Features

### **Authentication & User Management**
- [x] User Registration  
- [x] User Login  
- [x] Role-based Authentication (Customer and Admin)  
- [x] Secure Password Hashing  
- [x] Password Reset Functionality  
- [x] Protected Routes  

### **Product Management**
- [x] Product Listing  
- [x] Product Filtering  
- [x] Product Search  
- [x] Product Details View  
- [x] Admin Product Management  
  - Add new products  
  - Edit existing products  
  - Delete products  

### **Cart & Rental System**
- [x] Add to Cart Functionality  
- [x] Cart Management  
- [x] Quantity Adjustment  
- [x] Persistent Cart Storage  
- [x] Total Price Calculation  

### **Order Management**
- [x] Create Rental Orders  
- [x] View Rental Orders  
- [x] Order Status Tracking  
- [x] Admin Order Management  

### **Dashboard**
- [x] Admin Dashboard  
- [x] Customer Order History  
- [x] Sales and Revenue Tracking  

---

## 🛠 Technology Stack

### **Frontend**
- React  
- Vite  
- React Router  
- Tailwind CSS  
- Context API  
- Axios  
- React Hook Form  

### **Backend**
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  
- bcryptjs  
- cors  

---

## 🏗 Project Structure
```
RentIt/
│
├── client/              # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   ├── shop/
│   │   │   ├── orders/
│   │   │   ├── dashboard/
│   │   │   └── common/
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── CartContext.jsx
│   │   │   └── OrderContext.jsx
│   │   ├── pages/
│   │   └── utils/
│
├── server/              # Express Backend
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Role.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   └── routes/
│
└── README.md
```

---

## 🔐 Authentication Flow
1. User Registration  
2. Login with Role-based Access  
3. JWT Token Generation  
4. Secure Route Protection  
5. Password Reset Mechanism  

---

## 🚀 Current Implementation Status

### **Backend Endpoints**
- [x] Authentication Routes  
- [x] Product Management Routes  
- [x] Order Management Routes  
- [x] User Profile Routes  

### **Frontend Components**
- [x] Authentication Pages  
- [x] Product Listing  
- [x] Product Details  
- [x] Shopping Cart  
- [x] Rental Order Creation  
- [x] Admin Dashboard  
- [x] Order History  

---

## 🔧 Key Features Highlights

### **Authentication**
- Secure password hashing  
- Role-based access control  
- JWT token management  
- Protected routes  

### **Product Management**
- Comprehensive product CRUD operations  
- Advanced filtering  
- Search functionality  

### **Cart System**
- Persistent cart storage  
- Real-time price calculation  
- Quantity management  

### **Order Management**
- Create and track rental orders  
- Admin order management  
- Order status tracking  

---

## 📦 Prerequisites
- Node.js (v16+)  
- npm (v8+)  
- MongoDB  

---

## 🛠 Installation & Setup

### **Backend Setup**
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### **Frontend Setup**
```bash
cd client
npm install
npm run dev
```

### **Environment Variables**
```bash
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## 🚧 Future Roadmap
- [ ] Advanced product recommendations  
- [ ] Integrated payment system  
- [ ] User reviews and ratings  
- [ ] Enhanced analytics dashboard  
- [ ] Mobile responsiveness  
- [ ] Performance optimization  
- [ ] Advanced search and filtering  

---

## 🤝 Contributing
1. Fork the repository  
2. Create a feature branch  
3. Commit changes  
4. Push to branch  
5. Open a Pull Request  

---

## 📄 License
MIT License  

---

## 📞 Contact
**Your Name** – your.email@example.com  

Project Link: [Your GitHub Repository]  
