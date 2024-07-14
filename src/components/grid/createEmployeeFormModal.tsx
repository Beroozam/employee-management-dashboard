"use client";

import { Modal } from "flowbite-react";
import EmployeeForm from "@/components/grid/employeeForm";
import { useAppDispatch, useAppSelector } from "@/store/reduxTypedHooks";
import { createEmployeeModalAction } from "@/store/slice";
import { Props } from "@/types/types";

const CreateEmployeeFormModal = ({ onSubmit }: Props) => {
	// Use a selector to get the state of the createEmployeeModal from the Redux store
	const openModal = useAppSelector(state => state.app.createEmployeeModal);
	// Use a dispatch hook to dispatch actions to the Redux store
	const dispatch = useAppDispatch();

	// Function to handle closing the modal by dispatching an action to update the state
	function onCloseModal() {
		dispatch(createEmployeeModalAction(false));
	}

	return (
		<>
			<Modal show={openModal} size="xl" onClose={onCloseModal} popup>
				<Modal.Header className={`ps-6 pt-4 mb-4`}>Create Employee</Modal.Header>
				<Modal.Body>
					<EmployeeForm onSubmit={onSubmit} />
				</Modal.Body>
			</Modal>
		</>
	);
}

export default CreateEmployeeFormModal;
