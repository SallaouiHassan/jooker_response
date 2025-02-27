import { IResponse } from "./http";
import { IServiceResponse } from "./service";
export declare function SuccefulResponse(data?: any): IResponse<any>;
export declare function ErrorApi(service?: string): IResponse<any>;
export declare function ErrorData(msg?: string): IResponse<any>;
export declare function ForbidenAcess(msg?: string): IResponse<any>;
export declare function ResponseBuilder(serviceResponse: IServiceResponse<any>): IResponse<any>;
export { IResponse } from "./http";
