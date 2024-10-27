
import { ErrorHttp } from '@/abstracts/error';
import { ENV } from '@/config/dotenv';
import axios from 'axios';

const baseURL = `${ENV.URL_BACK}/api`;
const defaultOptions = {
	baseURL,
	headers: {
		"Content-Type": "application/json"
	}
};

const axiosClient = axios.create({
	...defaultOptions
});

const axiosAuth = axios.create({
	...defaultOptions,
});

axiosClient.interceptors.response.use(
	(response) => {
		return { ...response.data, status: response.status };
	},
	(error) => {
		throw new ErrorHttp(error);
	},
)

axiosAuth.interceptors.request.use(async (request) => {
	// const session = await getSession();
	// if (session) {
	// 	request.headers.Authorization = `Bearer ${session.token}`;
	// }
	return request;
});
axiosAuth.interceptors.response.use(
	(response) => {
		return response.data;
		return { ...response.data, status: response.status };
	},
	(error) => {
		console.log("ERROR AX999 ", error)
		throw new ErrorHttp(error);
	},
)

export { axiosClient, axiosAuth };