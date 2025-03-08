# Greeting App

A simple full-stack web application that allows users to enter their name and receive a personalized greeting message.

## 🚀 Features
- Backend built with **Node.js & Express.js**
- Frontend developed using **React & Tailwind CSS**

## 🛠 Installation & Setup

### Backend
   ```
   The API will run on `http://localhost:5000`.

### Frontend  

   The application will run on `http://localhost:5173`.

## 📌 API Endpoint
- **GET /api/greet?name=YourName**
  - Response:
    ```json
    {
      "message": "Hello, YourName! Welcome to Younglabs."
    }
    ```
  - If name is missing:
    ```json
    {
      "error": "Name is required."
    }
    ```

## 🌍 Deployment
Application using Vercel or Render:
- **Frontend:** Deploy the React app using [Vercel]
- **Backend:** Deploy the Express server on [Render]

## 🎯 Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** React.js, Tailwind CSS
- **Deployment:** Vercel, Render
