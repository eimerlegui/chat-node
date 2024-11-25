import { IHttp } from '@/types';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export abstract class Http implements IHttp {
	protected constructor(private axiosInstance: AxiosInstance) { }

	async get<T>(url: string, params?: any, options?: AxiosRequestConfig): Promise<T> {
		return await this.axiosInstance.get(url, { params, ...options }) as T
	}
	async post<T>(url: string, params?: any, options?: AxiosRequestConfig): Promise<T> {
		return await this.axiosInstance.post(url, params, { ...options }) as T
	}
	async put<T>(url: string, params?: any, options?: AxiosRequestConfig): Promise<T> {
		return await this.axiosInstance.put(url, params, { ...options }) as T
	}
	async delete<T>(url: string, params?: any, options?: AxiosRequestConfig): Promise<T> {
		return await this.axiosInstance.delete(url, { params, ...options }) as T
	}
}