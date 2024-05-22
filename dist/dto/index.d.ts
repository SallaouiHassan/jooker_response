export interface IResponse {
    readonly status: number;
    readonly data: any;
    readonly mssg: string;
    setData(data: any): IResponse;
    setMssg(mssg: string): IResponse;
    setStatus(status: number): IResponse;
}
export declare class Response {
    status: number;
    data: any;
    mssg: string;
    setData(data: any): IResponse;
    setMssg(mssg: string): IResponse;
    setStatus(status: number): IResponse;
}
