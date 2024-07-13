import {EmployeeFormData} from "@/helpers/employeeSchema";

export type Employee = {
	id: number,
	name: string,
	age: number,
	department: string,
	position: string,
	email: string,
	phone: string
};

export interface Props {
	employee?: Employee;
	onSubmit: (employee: EmployeeFormData) => Promise<void>;
}