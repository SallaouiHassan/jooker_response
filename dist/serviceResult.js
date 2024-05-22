"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorServiceResponse = exports.NoDataServiceResponse = exports.SuccefulServiceResponse = void 0;
const service_1 = require("./service");
function SuccefulServiceResponse(data = {}) {
    let response = new service_1.ServiceResponse();
    response.state = true;
    response.data = data;
    response.msg = "OK";
    return response;
}
exports.SuccefulServiceResponse = SuccefulServiceResponse;
function NoDataServiceResponse() {
    let response = new service_1.ServiceResponse();
    response.state = false;
    response.data = null;
    response.msg = "NO DATA WAS FOUND";
    return response;
}
exports.NoDataServiceResponse = NoDataServiceResponse;
function ErrorServiceResponse(errorType = "") {
    let response = new service_1.ServiceResponse();
    response.state = false;
    response.data = null;
    response.msg = null;
    response.errorType = errorType;
    return response;
}
exports.ErrorServiceResponse = ErrorServiceResponse;
//# sourceMappingURL=serviceResult.js.map