import { createSlice, Draft } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Employee } from "@/types/types";

// Define the shape of the appSlice state
export interface AppSliceState {
	backdrop: boolean;
	createEmployeeModal: boolean;
	updateEmployeeModal: boolean;
	employeeData: Employee | undefined;
}

// Initialize the initial state of the appSlice state
const initialState: AppSliceState = {
	backdrop: false,
	createEmployeeModal: false,
	updateEmployeeModal: false,
	employeeData: undefined,
};

// Create a slice for the app state with actions and reducers
export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		// Define a reducer for handling the backdrop state
		backDropAction: (state: Draft<AppSliceState>, action: PayloadAction<AppSliceState["backdrop"]>) => {
			state.backdrop = action.payload;
		},
		// Define a reducer for handling the create employee modal state
		createEmployeeModalAction: (state: Draft<AppSliceState>, action: PayloadAction<AppSliceState["createEmployeeModal"]>) => {
			state.createEmployeeModal = action.payload;
		},
		// Define a reducer for handling the update employee modal state
		updateEmployeeModalAction: (state: Draft<AppSliceState>, action: PayloadAction<AppSliceState["updateEmployeeModal"]>) => {
			state.updateEmployeeModal = action.payload;
		},
		// Define a reducer for handling the employee data
		employeeDataAction: (state: Draft<AppSliceState>, action: PayloadAction<AppSliceState["employeeData"]>) => {
			state.employeeData = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	backDropAction,
	createEmployeeModalAction,
	updateEmployeeModalAction,
	employeeDataAction,
} = appSlice.actions;

export default appSlice.reducer;
