
# Employee Management Dashboard

## Overview

The Employee Management Dashboard is a responsive web application designed for managing employee data within a company. This project features a set of components and Redux-based state management to handle employee data, including adding, updating, and removing employees.

## Features

- **Employee Management**: Create, update, and delete employee records.
- **Modals**: Use modals for forms to add and update employee information.
- **State Management**: Use Redux for state management with `@reduxjs/toolkit`.
- **API Integration**: Interact with an API to perform CRUD operations on employee data.
- **Loading State**: Display a loading spinner during asynchronous operations.
- **Notifications**: Use `react-toastify` for user feedback and notifications.

## Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Beroozam/employee-management-dashboard.git
   cd employee-management-dashboard
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory and add the following environment variable:

   ```env
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

## Components

### `EmployeeFormSchema`

- **Location**: `src/schemas/employeeFormSchema.ts`
- **Description**: Defines the validation schema for employee forms using Zod.

### `ErrorMessage`

- **Location**: `src/components/ErrorMessage.tsx`
- **Description**: A component to display error messages from form validation.

### `CreateEmployeeFormModal`

- **Location**: `src/components/CreateEmployeeFormModal.tsx`
- **Description**: A modal component for creating a new employee. It uses `EmployeeForm` and is controlled via Redux state.

### `DialogProvider`

- **Location**: `src/components/DialogProvider.tsx`
- **Description**: Provides a Toast container for notifications and a backdrop for loading states.

### `authenticationEndPoints`

- **Location**: `src/api/authenticationEndPoints.ts`
- **Description**: Defines API endpoints for employee CRUD operations using `createApi` from `@reduxjs/toolkit/query/react`.

### `RemoveEmployee`

- **Location**: `src/components/RemoveEmployee.tsx`
- **Description**: A button component to remove an employee by ID.

## Redux State Management

### `store`

- **Location**: `src/store/store.ts`
- **Description**: Configures the Redux store with API slices and middleware.

### `appSlice`

- **Location**: `src/store/slice.ts`
- **Description**: Defines the state and reducers for managing application state, including modals and loading states.

### `baseApi`

- **Location**: `src/store/baseApi.ts`
- **Description**: Configures the base API with axios and defines common query/mutation functions.

## Custom Hooks

- **`useAppDispatch`**: Custom hook for dispatching Redux actions.
- **`useAppSelector`**: Custom hook for selecting Redux state.


## Contact

For any questions or feedback, please reach out to [behrouz.dev@gmail.com](mailto:behrouz.dev@gmail.com).
