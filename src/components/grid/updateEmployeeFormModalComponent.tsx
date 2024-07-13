import React from 'react';
import UpdateEmployeeFormModal from "@/components/grid/updateEmployeeFormModal";
import {updateEmployeeModalAction} from "@/store/slice";
import {toast} from "react-toastify";
import {useUpdateEmployeeMutation} from "@/components/grid/endPoints";
import {useAppDispatch, useAppSelector} from "@/store/reduxTypedHooks";

const UpdateEmployeeFormModalComponent = () => {

	const [fetchUpdateEmployee] = useUpdateEmployeeMutation()
	const dispatch = useAppDispatch()
	// employee data state that provided and fill from updateEmployee component update handler
	const employee = useAppSelector(state=>state.app.employeeData)

	// Define the handler for updating an employee
	const updateEmployeeHandler = async (data:any)=>{
	// Attempt to update the employee with the provided data
		try{
			await fetchUpdateEmployee({...data,id:employee?.id})
			dispatch(updateEmployeeModalAction(false))
		}catch (error){
			toast.error("An unexpected error occurred");
		}finally {
			dispatch(updateEmployeeModalAction(false))
		}
	}

	return <UpdateEmployeeFormModal
		onSubmit={updateEmployeeHandler}
		employee={employee}
	/>
};

export default UpdateEmployeeFormModalComponent;