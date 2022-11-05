function responseSuccess(message, statusCode, data){
    return {
        message: message,
        error: false,
        statusCode: statusCode,
        data: data,
        createdAt: new Date()
    };
}

function responseError(message, statusCode){
    return {
        message: message,
        error: true,
        statusCode: statusCode,
        createdAt: new Date()
    }
}

module.exports = {responseSuccess, responseError}