import React from 'react';
import {useAddEmployeeMutation} from "@/components/grid/endPoints";
import CreateEmployeeFormModal from "@/components/grid/createEmployeeFormModal";
import {useAppDispatch} from "@/store/reduxTypedHooks";
import {createEmployeeModalAction} from "@/store/slice";
import {toast} from "react-toastify";

const AddEmployee = () => {
	// Initialize the fetchAddEmployee mutation
	const [fetchAddEmployee] = useAddEmployeeMutation();
	// Initialize the dispatch function for dispatching actions
	const dispatch = useAppDispatch();

	// Define the handler for adding an employee
	const addEmployeeHandler = async (data: any) => {
		try {
			// Attempt to add the employee with the provided data
			await fetchAddEmployee({ ...data });
			// Close the create employee modal on success
			dispatch(createEmployeeModalAction(false));
		} catch (error) {
			// Display an error toast if an unexpected error occurs
			toast.error("An unexpected error occurred");
		} finally {
			// Ensure the create employee modal is closed
			dispatch(createEmployeeModalAction(false));
		}
	};

	return (
		<div>
			<CreateEmployeeFormModal onSubmit={addEmployeeHandler} />
			{/* Render a button to open the create employee modal */}
			<button
				className={`p-2 bg-blue-500 text-white mb-4 rounded-lg cursor-pointer`}
				onClick={() => dispatch(createEmployeeModalAction(true))}
			>
				Add Employee
			</button>
		</div>
	);
};

export default AddEmployee;