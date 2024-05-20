# API Rest for User and Task Management

This Rest API is developed in Node.js with Express and MongoDB (Mongoose) to provide JWT authentication and management of users and tasks.

## Authentication

All authenticated routes require a JWT token sent in the request header as `Authorization: Bearer <token>`.

### Register New User

- **Endpoint:** `POST /api/auth/register`
- **Body:**
  ```json
  {
    "name": "Felipe",
    "email": "felipe@test.com",
    "password": "felipe123",
    "role": "FE"
  }
  ```
- **Success Response:**
  ```json
  {
    "token": "<JWT Token>"
  }
  ```

### Login

- **Endpoint:** `POST /api/auth/login`
- **Body:**
  ```json
  {
    "email": "felipe@test.com",
    "password": "felipe123"
  }
  ```
- **Success Response:**
  ```json
  {
    "token": "<JWT Token>"
  }
  ```

## User Management

### List All Users

- **Endpoint:** `GET /api/users`
- **Authentication:** Requires JWT token
- **Success Response:**
  ```json
  [
    {
      "_id": "664b821e86b50afd1ac9860f",
      "name": "Felipe",
      "email": "felipe@test.com",
      "role": "FE"
    }
    // Other users...
  ]
  ```

### Get User by ID

- **Endpoint:** `GET /api/users/:id`
- **Authentication:** Requires JWT token
- **Success Response:**
  ```json
  {
    "_id": "664b821e86b50afd1ac9860f",
    "name": "Felipe",
    "email": "felipe@test.com",
    "role": "FE"
  }
  ```

### Create New User

- **Endpoint:** `POST /api/users`
- **Authentication:** Requires JWT token
- **Body:**
  ```json
  {
    "name": "Augusto",
    "email": "augusto@test.com",
    "password": "augusto123",
    "role": "BE"
  }
  ```
- **Success Response:**
  ```json
  {
    "_id": "664b844e4864c2f9d3609719",
    "name": "Augusto",
    "email": "augusto@test.com",
    "role": "BE"
  }
  ```

### Update User by ID

- **Endpoint:** `PUT /api/users/:id`
- **Authentication:** Requires JWT token
- **Body:**
  ```json
  {
    "name": "Augusto",
    "email": "augusto@test.com",
    "role": "LEAD"
  }
  ```
- **Success Response:**
  ```json
  {
    "_id": "664b844e4864c2f9d3609719",
    "name": "Augusto",
    "email": "augusto@test.com",
    "role": "LEAD"
  }
  ```

### Delete User by ID

- **Endpoint:** `DELETE /api/users/:id`
- **Authentication:** Requires JWT token
- **Success Response:**
  ```json
  {
    "message": "User deleted"
  }
  ```

### Count Users by Role

- **Endpoint:** `GET /api/users/count/role`
- **Authentication:** Requires JWT token
- **Success Response:**
  ```json
  {
    "FE": 1,
    "BE": 1,
    "LEAD": 1,
    "DATA_ANALYST": 0
  }
  ```

## Task Management

### List All Tasks for Logged-in User

- **Endpoint:** `GET /api/tasks`
- **Authentication:** Requires JWT token
- **Success Response:**
  ```json
  [
    {
      "_id": "664b879fefc8fea8e6e016b8",
      "title": "Fifth task",
      "description": "With description",
      "owner": "664b821e86b50afd1ac9860f"
    }
    // Other tasks...
  ]
  ```

### Get Task by ID

- **Endpoint:** `GET /api/tasks/:id`
- **Authentication:** Requires JWT token
- **Success Response:**
  ```json
  {
    "_id": "664b879fefc8fea8e6e016b8",
    "title": "Fifth task",
    "description": "With description",
    "owner": "664b821e86b50afd1ac9860f"
  }
  ```

### Create New Task

- **Endpoint:** `POST /api/tasks`
- **Authentication:** Requires JWT token
- **Body:**
  ```json
  {
    "title": "Fifth task",
    "description": "With description"
  }
  ```
- **Success Response:**
  ```json
  {
    "_id": "664b879fefc8fea8e6e016b8",
    "title": "Fifth task",
    "description": "With description",
    "owner": "664b821e86b50afd1ac9860f"
  }
  ```

### Update Task by ID

- **Endpoint:** `PUT /api/tasks/:id`
- **Authentication:** Requires JWT token
- **Body:**
  ```json
  {
    "title": "Updated title",
    "description": "Updated description"
  }
  ```
- **Success Response:**
  ```json
  {
    "_id": "664b879fefc8fea8e6e016b8",
    "title": "Updated title",
    "description": "Updated description",
    "owner": "664b821e86b50afd1ac9860f"
  }
  ```

### Delete Task by ID

- **Endpoint:** `DELETE /api/tasks/:id`
- **Authentication:** Requires JWT token
- **Success Response:**
  ```json
  {
    "message": "Task deleted"
  }
  ```

### List Unassigned Tasks

- **Endpoint:** `GET /api/tasks/unassigned`
- **Authentication:** Requires JWT token
- **Success Response:**
  ```json
  [
    {
      "_id": "664b879fefc8fea8e6e016b8",
      "title": "Unassigned task",
      "description": "Description",
      "owner": null
    }
    // Other unassigned tasks...
  ]
  ```

### Assign Owner to a Task

- **Endpoint:** `PATCH /api/tasks/:id/assign`
- **Authentication:** Requires JWT token
- **Body:**
  ```json
  {
    "ownerEmail": "felipe@test.com"
  }
  ```
- **Success Response:**
  ```json
  {
    "_id": "664b8f075f73a814df209108",
    "title": "Task title",
    "description": "Task description",
    "owner": "664b821e86b50afd1ac9860f"
  }
  ```

## Server Setup and Initialization

### Steps to Start the Server

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure environment variables:** Create a `.env` file in the project root and define the following variables:

   ```env
   PORT=5000
   MONGO_URI=<your_mongo_atlas_uri>
   JWT_SECRET=<your_jwt_secret>
   ```

3. **Connect to MongoDB:** Configure the MongoDB connection in the `config/db.js` file.

4. **Start the server:**
   ```bash
   npm start
   ```

The server will run on the defined port (default is `5000`). Use tools like Postman or Insomnia to test the authenticated and unauthenticated routes.

## Project Structure

```plaintext
|-- config
|   |-- db.js
|-- controllers
|   |-- authController.js
|   |-- userController.js
|   |-- taskController.js
|-- middlewares
|   |-- authMiddleware.js
|-- models
|   |-- User.js
|   |-- Task.js
|-- routes
|   |-- authRoutes.js
|   |-- userRoutes.js
|   |-- taskRoutes.js
|-- .env
|-- index.js
|-- package.json
```

This structure follows a layered architecture, separating responsibilities into different files and directories.
