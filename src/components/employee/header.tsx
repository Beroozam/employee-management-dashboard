import React from 'react';
import Link from "next/link";

const Header = () => {
	// header component with back navigation to home page
	return <div className={`flex gap-4 w-[320px] shadow rounded-lg p-4 mx-auto mb-4 mt-10`}>
		<Link href={`/`}>
			<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
					 height="24" fill="none" viewBox="0 0 24 24">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							d="M5 12h14M5 12l4-4m-4 4 4 4"/>
			</svg>
		</Link>
		<span>Home</span>
	</div>
};

export default Header;