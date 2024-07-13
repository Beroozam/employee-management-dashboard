"use client"
import React from 'react';
import {useRemoveEmployeeMutation} from "@/components/grid/endPoints";
import {toast} from "react-toastify";

const RemoveEmployee = ({id}:{id:number}) => {

	const [fetchRemoveEmployee] = useRemoveEmployeeMutation()

	// Define the handler for deleting an employee
	const handleDelete = (id:number)=>{
		// Attempt to remove the employee with the provided id
		fetchRemoveEmployee({id})
			.catch(()=>toast.error("An unexpected error occurred"))
	}

	return <button
		className={`text-sm font-medium px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer`}
		onClick={()=>handleDelete(id)}
	>DELETE</button>
};

export default RemoveEmployee;