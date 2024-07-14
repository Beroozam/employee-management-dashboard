
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

- Node.js
- npm

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Beroozam/employee-management-dashboard.git
   cd employee-management-dashboard
   ```

2. **Install Dependencies**

   ```bash
   npm install
   
   ```

3. **Run the Development Server**

   ```bash
   npm run start:server
   ```

   Open your browser and navigate to `http://localhost:2030` to view the application.
   
   and open `http://localhost:3000` to view json-server page. 
   and open `http://localhost:3000/employee` to view resources 

4. **Run the app in vercel**

   Open this link in github about `https://employee-management-dashboard-coral.vercel.app/`
   to view the live demo

   You should run json-server in your local machine to use the data locally otherwise the app will not display properly.

   ```bash
    npm run start:server
    # or
    npm run server    
   ```


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
