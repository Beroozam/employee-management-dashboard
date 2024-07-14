"use client";
import { Modal } from "flowbite-react";
import EmployeeForm from "@/components/grid/employeeForm";
import {useAppDispatch, useAppSelector} from "@/store/reduxTypedHooks";
import {updateEmployeeModalAction} from "@/store/slice";
import {Props} from "@/types/types";

const UpdateEmployeeFormModal = ({employee,onSubmit}:Props) => {
	const openModal = useAppSelector(state=>state.app.updateEmployeeModal)
	const dispatch = useAppDispatch()
	function onCloseModal() {
		dispatch(updateEmployeeModalAction(false))
	}

	return (
		<>
			<Modal show={openModal} size="xl" onClose={onCloseModal} popup>
				<Modal.Header className={`ps-6 pt-4 mb-4`}>Update Employee</Modal.Header>
				<Modal.Body>
					<EmployeeForm onSubmit={onSubmit} employee={employee}/>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default UpdateEmployeeFormModal
