"use client"

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { employeeFormSchema, EmployeeFormData } from "@/helpers/employeeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Employee } from "@/types/types";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { departments } from "@/helpers/departments";
import { positions } from "@/helpers/positions";
import ErrorMessage from "@/components/grid/ErrorMessage";

// Define the props for the EmployeeForm component
interface Props {
	employee?: Employee; // Optional existing employee data for editing
	onSubmit: (employee: EmployeeFormData) => Promise<void>; // Function to handle form submission
}

const EmployeeForm = ({ employee, onSubmit }: Props) => {
	// State to manage form submission status
	const [isSubmitting, setSubmitting] = useState<boolean>(false);
	// State to manage the list of positions based on the selected department
	const [position, setPosition] = useState<string[]>(employee?positions[employee?.department]:positions["Engineering"]);

	// Initialize the form with react-hook-form and zod for validation
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EmployeeFormData>({
		defaultValues: employee, // Set default values if editing an existing employee
		resolver: zodResolver(employeeFormSchema), // Use zod schema for validation
	});

	// Handler for department selection changes
	const selectDepartmentHandler = (event: any) => {
		const department = event.target.value;
		const newPosition = positions[department];
		setPosition(newPosition);
	}

	// Render the form
	return (
		<form
			name="employee"
			onSubmit={handleSubmit(async (formData) => {
				try {
					setSubmitting(true); // Set submitting state to true
					await onSubmit(formData); // Call onSubmit with form data
				} catch (error) {
					toast.error("An unexpected error occurred"); // Show error toast on failure
				} finally {
					setSubmitting(false); // Reset submitting state
				}
			})}
			className=""
		>
			<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
				<div className={`w-full sm:col-span-2`}>
					<div className="mb-2 block">
						<Label htmlFor="name" value="Employee name" color={`${errors.name && 'failure'}`} />
					</div>
					<TextInput
						helperText={<ErrorMessage error={errors.name} />}
						color={`${errors.name && 'failure'}`}
						id="name"
						type="text"
						placeholder="John Doe"
						{...register("name")}
					/>
				</div>

				<div className="w-full">
					<div className="mb-2 block">
						<Label htmlFor="department" value="Select department" />
					</div>
					<Select
						id="department"
						{...register("department")}
						onChange={selectDepartmentHandler}
					>
						{departments.map(item => (
							<option key={item}>{item}</option>
						))}
					</Select>
				</div>

				<div className="w-full">
					<div className="mb-2 block">
						<Label htmlFor="position" value="Select position" />
					</div>
					<Select id="position" {...register("position")}>
						{position.map(item => (
							<option key={item}>{item}</option>
						))}
					</Select>
				</div>

				<div className={`w-full`}>
					<div className="mb-2 block">
						<Label htmlFor="number" value="Employee age" color={`${errors.age && 'failure'}`} />
					</div>
					<TextInput
						helperText={<ErrorMessage error={errors.age} />}
						id="number"
						type="number"
						{...register("age")}
						color={`${errors.age && 'failure'}`}
						placeholder={'25'}
					/>
				</div>

				<div className={`w-full`}>
					<div className="mb-2 block">
						<Label htmlFor="phone" value="Employee phone" />
					</div>
					<TextInput
						id="phone"
						type="text"
						placeholder="555-1234"
						{...register("phone")}
					/>
				</div>

				<div className={`w-full sm:col-span-2`}>
					<div className="mb-2 block">
						<Label
							htmlFor="email"
							value="Employee email address"
							color={`${errors.email && 'failure'}`}
						/>
					</div>
					<TextInput
						id="email"
						type="email"
						placeholder="example@gmail.com"
						{...register("email")}
						helperText={<ErrorMessage error={errors.email} />}
						color={`${errors.email && 'failure'}`}
					/>
				</div>
			</div>
			<Button
				disabled={isSubmitting}
				type="submit"
				className={`bg-blue-700 my-6 px-3`}
			>
				Submit
			</Button>
		</form>
	);
};

export default EmployeeForm;
