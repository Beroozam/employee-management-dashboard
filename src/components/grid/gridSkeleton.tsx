import React from 'react';
import shimmer from "@/helpers/shimmer";

const GridSkeleton = () => {
	return (
		<div className={`${shimmer} relative mt-5`}>
			<div className={`w-[150px] h-[50px] bg-gray-200 rounded-2xl`}></div>
			<div className={`flex flex-col mt-5 gap-3`}>
				<div className={`w-full h-[40px] bg-gray-300 rounded-lg`}></div>
				<div className={`w-full h-[40px] bg-gray-200 rounded-lg`}></div>
				<div className={`w-full h-[40px] bg-gray-200 rounded-lg`}></div>
				<div className={`w-full h-[40px] bg-gray-200 rounded-lg`}></div>
				<div className={`w-full h-[40px] bg-gray-200 rounded-lg`}></div>
				<div className={`w-full h-[40px] bg-gray-200 rounded-lg`}></div>
				<div className={`w-full h-[40px] bg-gray-200 rounded-lg`}></div>
				<div className={`w-full h-[40px] bg-gray-200 rounded-lg`}></div>
				<div className={`w-full h-[40px] bg-gray-300 rounded-lg`}></div>
			</div>
		</div>
	);
};

export default GridSkeleton;