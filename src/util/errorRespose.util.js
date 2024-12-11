class ErrorResponse {
    constructor(message = "internal Server error ", statusCode = 500) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default ErrorResponse