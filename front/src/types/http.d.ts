
import { AxiosRequestConfig } from "axios";

export interface IOptionsHttp extends AxiosRequestConfig {}

export interface IHttp {
	get<T>(url: string, params:any, options?: IOptionsHttp): Promise<T>;
	post<T>(url: string, params:any, options?: IOptionsHttp): Promise<T>;
	put<T>(url: string, params:any, options?: IOptionsHttp): Promise<T>;
	delete<T>(url: string, params:any, options?: IOptionsHttp): Promise<T>;
}