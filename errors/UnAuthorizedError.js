import CustomAPIError from "./CustomAPIError.js";
import statusCode from "http-status-codes";
class UnAuthorizedError extends CustomAPIError {
    constructor(message){
        super(message);
        this.statusCode=statusCode.BAD_REQUEST; 
    }
}

export default UnAuthorizedError;