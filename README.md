# Student Absence Management System

## Description

This is a web application for managing student absences. It provides two main sections:

- **Admin Section**: Allows administrators to manage student data, teachers, modules, and handle absence records.
- **User Section**: Allows teachers and department heads to manage absence entries and generate reports.

The system is built using the **MERN Stack (MongoDB, Express, React, Node.js)**.

## Features

### Admin Features
- Create and manage departments and courses.
- Import student data from Excel files.
- Add and assign teachers to departments and modules.
- Generate absence reports at the end of each semester.
- Backup data at the end of each year.

### Teacher/Department Head Features
- Assign students to groups (TD/TP).
- Record and manage student absences.
- Modify the status of absences (justified/unjustified).
- Generate monthly absence reports by module, course, and department.

## Technologies Used

- **MongoDB**: NoSQL database used for storing application data.
- **Express.js**: Web framework for building the RESTful API.
- **React.js**: Frontend framework for building the user interface.
- **Node.js**: JavaScript runtime used for building the back-end server.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **CORS**: Cross-Origin Resource Sharing middleware for Express.
- **Bcrypt.js**: Password hashing library for securing passwords.
- **JSON Web Tokens (JWT)**: Used for user authentication.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed: [Download and install Node.js](https://nodejs.org/)
- MongoDB installed or access to a MongoDB Atlas instance.
- npm (Node Package Manager) installed.

## Installation

Follow the steps below to set up the project on your local machine.

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/yourusername/your-repository.git
