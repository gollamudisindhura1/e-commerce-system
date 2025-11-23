export class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = "APiError";
    }
}
export function handleError(error) {
    if (error instanceof ApiError) {
        console.error(`API ERROR ${error.statusCode}:${error.message}`);
    }
    else if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
    }
    else {
        console.error("AN unknown error occured");
    }
}
