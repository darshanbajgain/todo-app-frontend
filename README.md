# Frontend Todo App

This project implements a frontend application for a Todo List using React, integrated with a backend Spring Boot RESTful API.

## Overview

The frontend Todo App provides users with a user-friendly interface to manage their tasks efficiently. Integrated with a backend Spring Boot RESTful API, this application allows users to perform CRUD (Create, Read, Update, Delete) operations on their todos with real-time updates reflecting on the backend database.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Axios**: Promise-based HTTP client for making requests to the backend API.
- **Integration**: Seamless integration with a backend Spring Boot RESTful API for real-time updates on database changes.

## Features

- **CRUD Operations**: Users can Create, Read, Update, and Delete todos.
- **Real-time Updates**: Changes made in the frontend reflect immediately on the backend database.
- **User Authentication**: Basic authentication implemented for a single user to validate in the frontend.
- **Context API**: Used for managing authentication state across multiple components.
- **Routing**: Implemented with React Router for navigation between different components.

## Getting Started

1. **Clone the Repository**: `git clone https://github.com/your_username/todo-frontend.git`
2. **Navigate to the Project Directory**: `cd todo-frontend`
3. **Install Dependencies**: `npm install`
4. **Start the Application**: `npm run dev`


## Folder Structure

- **src/**: Contains the source code for the frontend application.
  - **components/**: Contains React components for different parts of the application.
  - **api/**: Contains Axios API client for making requests to the backend.
  - **security/**: Contains authentication-related components and context provider.
- **public/**: Contains static assets and index.html file.

## Creator

- [Darshan Bajgain](https://github.com/darshanbajgain)

## Backend Integration

This frontend application is seamlessly integrated with a backend Spring Boot RESTful API for real-time updates on the backend database. For more information about the backend integration, refer to the [Backend Repository](https://github.com/darshanbajgain/restful-todoapp-backend).

