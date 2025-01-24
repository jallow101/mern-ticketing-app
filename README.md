# MERN Ticketing App

This project is a MERN (MongoDB, Express, React, Node.js) application for managing a ticketing system. The backend API is built using Express.js and Firestore as the database, providing a scalable and efficient platform for ticket management.

## Project Features

### Backend
- **Express.js**: A fast and minimalist web framework for building RESTful APIs.
- **Firestore**: A cloud-hosted NoSQL database for storing ticketing data.
- **Authentication**: Secure user authentication and authorization.
- **API Endpoints**:
  - **Tickets**:
    - Create, read, update, and delete tickets.
    - Assign tickets to users.
    - Mark tickets as resolved.
  - **Users**:
    - Register and login.
    - Manage user roles (e.g., admin, agent, customer).
  - **Comments**:
    - Add comments to tickets for better communication.
  - **Notifications**:
    - Notify users of updates or changes to tickets.

### Frontend (Separate Repository)
- Built with React.js for dynamic and interactive user interfaces.
- Fully integrated with the backend API.

---

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - Firestore
  - Firebase Admin SDK
- **Frontend**:
  - React.js (Separate repo)
- **Additional Tools**:
  - Postman for API testing
  - JWT for user authentication

---

## API Documentation

### Base URL
http://localhost:5000/api

### Endpoints

#### Tickets
- **GET /tickets**: Retrieve all tickets.
- **GET /tickets/:id**: Retrieve a specific ticket.
- **POST /tickets**: Create a new ticket.
- **PUT /tickets/:id**: Update ticket details.
- **DELETE /tickets/:id**: Delete a ticket.

#### Users
- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Log in as an existing user.

#### Comments
- **POST /tickets/:ticketId/comments**: Add a comment to a ticket.
- **GET /tickets/:ticketId/comments**: Retrieve all comments for a ticket.

---

## Setup Instructions

### Prerequisites
1. **Node.js**: Install [Node.js](https://nodejs.org/).
2. **Firestore**: Set up a Firestore project in the Firebase Console.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jallow101/mern-ticketing-app.git
   cd mern-ticketing-app/server



## Project Structure

The backend directory is organized as follows:

```plaintext
server/
├── controllers/     # Handles API logic for tickets, users, and comments
├── models/          # Defines Firestore schema and data models
├── routes/          # Configures API endpoints
├── middleware/      # Contains authentication and error-handling middleware
├── utils/           # Utility functions (e.g., for JWT, error formatting)
├── config/          # Firestore and server configuration files
├── .env             # Environment variables (not included in the repo)
├── package.json     # Node.js dependencies and scripts
└── index.js         # Entry point of the server

