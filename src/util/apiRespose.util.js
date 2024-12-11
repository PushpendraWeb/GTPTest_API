class ApiRespose {
    constructor(message = 'success', status = 200, data = null) {
        this.message = message;
        this.status = status;
        this.data = data;
    }
}

export default ApiRespose