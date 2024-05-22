"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBuilder = exports.ForbidenAcess = exports.ErrorData = exports.ErrorApi = exports.SuccefulResponse = void 0;
const http_1 = require("./http");
function SuccefulResponse(data = {}) {
    let response = new http_1.Response();
    response.status = 200;
    response.data = data;
    response.mssg = "OK";
    return response;
}
exports.SuccefulResponse = SuccefulResponse;
function ErrorApi(service = "") {
    let response = new http_1.Response();
    response.status = 500;
    response.data = {};
    response.mssg = "Error Service " + service;
    return response;
}
exports.ErrorApi = ErrorApi;
function ErrorData(msg = "") {
    let response = new http_1.Response();
    response.status = 400;
    response.data = {};
    response.mssg = msg;
    return response;
}
exports.ErrorData = ErrorData;
function ForbidenAcess(msg = "Forbiden access") {
    let response = new http_1.Response();
    response.status = 403;
    response.data = {};
    response.mssg = msg;
    return response;
}
exports.ForbidenAcess = ForbidenAcess;
function ResponseBuilder(serviceResponse) {
    if (serviceResponse.state)
        return SuccefulResponse(serviceResponse.data);
    else if (!serviceResponse.state && serviceResponse.errorType)
        return ErrorApi(serviceResponse.errorType);
    else if (!serviceResponse.state && serviceResponse.msg)
        return ErrorData(serviceResponse.msg);
    else
        return ErrorApi("UNKOWN ERROR");
}
exports.ResponseBuilder = ResponseBuilder;
//# sourceMappingURL=responseResult.js.map