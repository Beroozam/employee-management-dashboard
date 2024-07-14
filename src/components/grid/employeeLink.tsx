import React from 'react';
import Link from "next/link";

// custom components for link to show details of each employee in additional column
const EmployeeLink = (params: any) => {
	return <Link
		href={`/employee/${params.data.id}`}
		className={`bg-blue-500 text-white px-4 py-2 rounded-lg`}
	>
		{`Details of - ${params.data.name}`}
	</Link>
};

export default EmployeeLink;