import EmployeeDetails from "@/components/employee/employeeDetails";
import Header from "@/components/employee/header";

// async fetch to get employee from json server by provided id
async function getEmployee (id: string){
	const response = await fetch(`http://localhost:3000/employee/${id}`,{cache:"no-store"})
	return await response.json()
}

// page component for display employee details
export default async function Page({ params }: { params: { id: string } }) {
	const employee = await getEmployee(params.id)

	return <div>
		<Header />
		<EmployeeDetails details={employee}/>
	</div>
}