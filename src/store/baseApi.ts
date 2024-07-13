import {BaseQueryFn} from "@reduxjs/toolkit/query/react";
import {createApi} from "@reduxjs/toolkit/query/react";
import axios, {AxiosError, AxiosRequestConfig} from "axios";

type Fn = BaseQueryFn<
	{
		url: string
		method: AxiosRequestConfig['method']
		data?: AxiosRequestConfig['data']
		headers?: AxiosRequestConfig['headers']
		params?: AxiosRequestConfig['params']
		fullResult?: boolean
	}
>

const baseQuery: Fn = async ({ url, method, data, headers, params, fullResult = false, ...moreParams }) => {
	try {
		// Make an Axios request with the given parameters
		const result = await axios({ url: process.env.NEXT_PUBLIC_BASE_URL + url, method, data, params, headers, ...moreParams });
		// Return the full result or just the data based on the fullResult flag
		return { data: fullResult ? result : result.data };
	} catch (axiosError) {
		// Handle errors by casting the error to an AxiosError
		let err = axiosError as AxiosError;
		return {
			error: {
				status: err.response?.status,
				data: err.response?.data || err.message,
			},
		};
	}
};

// Create a base API using Redux Toolkit's createApi function
export const baseApi = createApi({
	reducerPath: 'splitApi', // Define the reducer path
	baseQuery: baseQuery,
	tagTypes: ['employees'], // Define tag types for caching and invalidation
	endpoints: () => ({}), // Initialize with an empty endpoints object
});