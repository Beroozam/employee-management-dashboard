import React from 'react';
import {employeeDataAction, updateEmployeeModalAction} from "@/store/slice";
import {useAppDispatch} from "@/store/reduxTypedHooks";
import {Employee} from "@/types/types";

const UpdateEmployee = ({employee}:{employee:Employee}) => {

	const dispatch = useAppDispatch()

	// Define the handler for open and initial an employee form modal
	const handleUpdate = ()=>{
		dispatch(employeeDataAction(employee))
		dispatch(updateEmployeeModalAction(true))
	}

	return <button
						className={`text-sm font-medium px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer`}
						onClick={handleUpdate}
					>
					UPDATE
				</button>
};

export default UpdateEmployee