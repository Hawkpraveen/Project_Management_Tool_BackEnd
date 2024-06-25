# Project Management Tool
## 🚀 Get started here
### Introduction
### This API provides endpoints for performing Project Management using the Kanban Board Style.

## 🔖Endpoints - Users

### ➡️ Login User
### URL - /api/auth/login-user
### Method - POST

### ➡️ Register User
### URL - /api/auth/register-user
### Method - POST

### ➡️ Register And Login Using Google
### URL - /api/auth/google
### Method - POST

### ➡️ Authenticated User's Profile Update
### URL - /api/user/update/:id
### Method - PUT

### ➡️ Authenticated User's Account Delete
### URL - /api/user/delete/:id
### Method - DELETE

## 🔖Endpoints - Boards

### ➡️ Create or Add Board
### URL - /api/board/create-board
### Method - POST

### ➡️ Get All Boards
### URL - /api/board/get-boards
### Method - GET

### ➡️ Get Single Board
### URL - /api/board/get-board/:boardId
### Method -GET

### ➡️Edit Board
### URL - /api/board/edit-board/:boardId
### Method - PUT

### ➡️Delete Board
### URL - /api/board/delete-board/:boardId
### Method - DELETE

## 🔖Endpoints - Sections

### ➡️ Create or Add Section
### URL - /api/section/create-section/:boardId
### Method - POST

### ➡️Edit Section
### URL - /api/section/edit-section/:sectiond
### Method - PUT

### ➡️Delete Section
### URL - /api/section/delete-section/:sectiond
### Method - DELETE

## 🔖Endpoints - Tasks

### ➡️ Create or Add Tasks
### URL - /api/task/create-task/:sectionId
### Method - POST

###➡️ Get All Tasks
###URL - /api/task/get-all-tasks
### Method - GET

### ➡️Edit Task
### URL - /api/task/edit-task/:taskId
### Method - PUT

### ➡️Delete Task
### URL - /api/task/delete-task/:taskId
### Method - DELETE

## Base URL: https://project-management-tool-backend-gayc.onrender.com/

## POSTMAN DOCUMENTATION : https://documenter.getpostman.com/view/34908360/2sA3drGZfq

