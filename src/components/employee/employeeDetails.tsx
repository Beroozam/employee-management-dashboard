"use client"
import React from 'react';
import {Employee} from "@/types/types";
import EmployeeItem from "@/components/employee/employeeItem";

// employee card details
const EmployeeDetails = ({details}:{details:Employee}) => {
	return (
		<div className={`flex flex-col rounded-lg shadow p-4 max-w-[320px] mx-auto`}>
			<EmployeeItem item={'Employee Name:'} itemValue={details.name} />
			<EmployeeItem item={'Employee ID:'} itemValue={details.id.toString()} />
			<EmployeeItem item={'Employee Age:'} itemValue={details.age.toString()} />
			<EmployeeItem item={'Employee Department:'} itemValue={details.department} />
			<EmployeeItem item={'Employee Position:'} itemValue={details.position} />
			<EmployeeItem item={'Employee Email:'} itemValue={details?.email} />
			<EmployeeItem item={'Employee Phone Number:'} itemValue={details?.phone} />
		</div>
	);
};

export default EmployeeDetails;