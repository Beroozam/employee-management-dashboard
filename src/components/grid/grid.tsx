"use client"

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import React, {useState} from "react";
import {useGetAllEmployeesQuery} from "@/components/grid/endPoints";
import RemoveEmployee from "@/components/grid/removeEmployee";
import AddEmployee from "@/components/grid/addEmployee";
import UpdateEmployee from "@/components/grid/updateEmployee";
import UpdateEmployeeFormModalComponent from "@/components/grid/updateEmployeeFormModalComponent";
import GridSkeleton from "@/components/grid/gridSkeleton";

const GridEmployees = () => {

	const {data,isLoading} = useGetAllEmployeesQuery({})

	// Column Definitions: Defines the columns to be displayed.
	const [colDefs] = useState([
		{ field: "id" },
		{ field: "name" },
		{ field: "age" },
		{ field: "department" },
		{ field: "position" },
		{ field: "email" },
		{ field: "phone" },
		// custom components for create remove and update button in additional column
		{ field:"actions" , cellRenderer:(params:any)=><div className={`flex flex-row gap-4`}>
				<UpdateEmployee employee={params.data}/>
				<RemoveEmployee id={params.data.id}/>
			</div>,
			width:200}
	]);

	// grid skeleton effect while data is loading
	if(isLoading) return <GridSkeleton />

	return (
		// wrapping container with theme & size
		<div
			className="w-full ag-theme-quartz" // applying the Data Grid theme
			style={{ height: "70vh" }} // the Data Grid will fill the size of the parent container
		>
			<AddEmployee />
			<AgGridReact
				rowData={data}
				columnDefs={colDefs}
				pagination={true}
				paginationPageSize={10}
				paginationPageSizeSelector={[10,20,50]}
			/>
			<UpdateEmployeeFormModalComponent />
		</div>
	)

}

export default GridEmployees