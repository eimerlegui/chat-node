
export class ErrorHttp extends Error {
	constructor(error: any) {

		if (error.response.status >= 500) {
			super(`Error grave en el servidor (${error.response.data.error})`);
		} else if (error.response.status >= 400){
			super(`Error pendejo (${error.response.data.error})`);
		}
		else {
			super("Error desconocido mi perro");
		}
		this.name = "CustomError";
	}
}