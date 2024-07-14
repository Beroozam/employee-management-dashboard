import EmployeeDetails from "@/components/employee/employeeDetails";
import Header from "@/components/employee/header";

// page component for display employee details
export default function Page({ params }: { params: { id: string } }) {
	return <div>
		<Header />
		<EmployeeDetails id={params.id}/>
	</div>
}