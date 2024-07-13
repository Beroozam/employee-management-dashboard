import {
	configureStore,
	isPending,
	isAsyncThunkAction,
	isFulfilled
} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import {baseApi} from "@/store/baseApi";
import appSlice, {backDropAction} from '@/store/slice'

// Define a custom middleware for authentication-related actions
const authMiddleware = api => next => action => {
	// Check if the action is an async thunk action
	if (isAsyncThunkAction(action)) {
		// Dispatch a backdrop action indicating the pending state of the action
		// @ts-ignore: Ignore TypeScript error for dispatching backdrop action
		api.dispatch(backDropAction(isPending(action)));
		// If the action is fulfilled and is a mutation type, show a success toast message
		isFulfilled(action) && action.meta.arg.type === "mutation" && setTimeout(() => {
			toast.success("Done successfully.");
		}, 0);
	}
	// Proceed to the next middleware or reducer
	return next(action);
};

// Configure the Redux store
export const store = configureStore({
	reducer: {
		// Add the app slice to the store
		app: appSlice,
		// Add the base API reducer to the store
		[baseApi.reducerPath]: baseApi.reducer
	},
	// Add custom middleware to the store
	middleware: getDefaultMiddleware => getDefaultMiddleware()
		.concat(baseApi.middleware)
		.concat(authMiddleware)
});

// Infer the `AppState` type from the store's state
export type AppState = ReturnType<typeof store.getState>;
// Infer the `AppDispatch` type from the store's dispatch function
export type AppDispatch = typeof store.dispatch;