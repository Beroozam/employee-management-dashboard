import React from "react";

const EmployeeItem = ({item,itemValue}:{item:string,itemValue:string})=>{
	return <div className={`flex flex-col gap-3`}>
		<span className={`font-bold text-lg`}>{item}</span>
		<span className={`text-gray-600 font-bold`}>{itemValue}</span>
		<hr className={`mb-4`}/>
	</div>
}
export default EmployeeItem