import { axiosAuth, axiosClient } from '@/libs/axios';
import { Http } from './abstracts/http';

export const HttpAuth = new class HttpAuthClass extends Http {
	constructor() {
		super(axiosAuth)
	}
}

export const HttpClient = new class HttpClientClass extends Http {
	constructor() {
		super(axiosClient)
	}
}