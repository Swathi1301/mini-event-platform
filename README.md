# Mini Event Platform – MERN Stack Intern Assignment

## 1. Project Overview
A full-stack web application built using **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
Users can register, login, create events, RSVP, and view all upcoming events.

---

## 2. Features Implemented
- User Signup and Login with JWT authentication  
- Create, Edit, Delete events (only by creator)  
- Upload event images  
- View all events in a responsive dashboard  
- RSVP / Cancel RSVP with capacity enforcement  
- No duplicate RSVPs allowed  
- Concurrency safe: prevents overbooking  

---

## 3. Folder Structure
# Mini Event Platform – MERN Stack Intern Assignment

## 1. Project Overview
A full-stack web application built using **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
Users can register, login, create events, RSVP, and view all upcoming events.

---

## 2. Features Implemented
- User Signup and Login with JWT authentication  
- Create, Edit, Delete events (only by creator)  
- Upload event images  
- View all events in a responsive dashboard  
- RSVP / Cancel RSVP with capacity enforcement  
- No duplicate RSVPs allowed  
- Concurrency safe: prevents overbooking  

---

## 3. Folder Structure
mini-event-platform/
├─ client/ # React frontend
├─ server/ # Node/Express backend
│ ├─ models/
│ ├─ routes/
│ ├─ middleware/
│ └─ server.js
├─ .gitignore
└─ README.md

---

## 4. Technical Explanation – RSVP Capacity & Concurrency
- Capacity is strictly enforced by checking `attendees.length < capacity`.  
- Users cannot RSVP more than once for the same event.  
- Atomic updates in MongoDB prevent overbooking when multiple users RSVP at the same time.  
- Example backend code:
```javascript
if (!event.attendees.includes(req.user.id) && event.attendees.length < event.capacity) {
    event.attendees.push(req.user.id);
    await event.save(); // atomic operation
}

5. Local Setup Instructions
Backend
cd server
npm install


Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000


Run server:

npm start

Frontend
cd ../client
npm install
npm start


Open in browser: http://localhost:3000

6. Deployment
Frontend: [my-repository-snowy-chi.vercel.app]
Backend: [mini-event-platform-1.onrender.com]

7. GitHub Repository Link

https://github.com/Swathi1301/mini-event-platform
